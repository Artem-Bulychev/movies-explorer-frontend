import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";
import { routesHeader, routesWithFooter } from "../../utils/constants.js";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import { mainApi } from '../../utils/MainApi';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const headRout = routesHeader.find((item) => {
    return item === pathname;
  });
  const footerRout = routesWithFooter.find((item) => {
    return item === pathname;
  });

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isErrorSubmit, setIsErrorSubmit] = useState('');

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (isLoggedIn) {
      mainApi
        .getUser(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setIsLoggedIn(true);
          }
        })
        .catch((error) => {
          console.error(`Ошибка: ${error}`);
        });
    }
  }, [isLoggedIn]);

  function register({ name, email, password }) {
    mainApi.register(name, email, password)
      .then((res) => {
        login({ email, password });
      })
      .catch((error) => {
        if (error.status === 409) {
          setIsErrorSubmit('Пользователь с таким email уже существует.');
        } else if (error.status === 500) {
          setIsErrorSubmit('На сервере произошла ошибка.');
        } else {
          setIsErrorSubmit('При регистрации пользователя произошла ошибка.');
        }
        console.error('Ошибка при регистрации пользователя.', error);
      })
  };

  function login({ email, password }) {
    mainApi.login(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setIsLoggedIn(true);
        navigate('/movies', {replace: true});
      })
      .catch((error) => {
        if (error.status === 401) {
          setIsErrorSubmit('Вы ввели неправильный логин или пароль.');
        } else if (error.status === 400) {
          setIsErrorSubmit('При авторизации произошла ошибка. Токен не передан или передан не в том формате.');
        } else if (error.status === 500) {
          setIsErrorSubmit('На сервере произошла ошибка.');
        } else {
          setIsErrorSubmit('При авторизации произошла ошибка. Переданный токен некорректен.');
        }
        console.error('Ошибка при логине пользователя.', error);
      })
  };

  function updateProfile({ name, email }) {
    const jwt = localStorage.getItem('jwt');
    mainApi.udpateUser(name, email, jwt)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((error) => {
        if (error.status === 409) {
          setIsErrorSubmit('Пользователь с таким email уже существует.');
        } else if (error.status === 500) {
          setIsErrorSubmit('На сервере произошла ошибка.');
        } else {
          setIsErrorSubmit('При обновлении профиля произошла ошибка.');
        }
        console.error('Ошибка при обновлении данных пользователя.', error);
      })
  };

  function logout() {
    setIsLoggedIn(false);
    localStorage.clear();
    navigate('/', {replace: true});
  };

  function checkToken() {
    const token = localStorage.getItem('jwt');
    mainApi
      .checkToken(token)
      .then((res) => {
        if (!res) {
          setIsLoggedIn(false);
          navigate('/', {replace: true});
          return;
        }
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setIsLoggedIn(false)
        console.error('Ошибка при проверке токена.', error);
      });
  }

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <div className="App">
      {headRout ? <Header isLoggedIn={isLoggedIn} /> : ""}
      <main>
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<Register isLoggedIn={isLoggedIn} register={register} isErrorSubmit={isErrorSubmit} setIsErrorSubmit={setIsErrorSubmit} />} />
            <Route path="/signin" element={<Login isLoggedIn={isLoggedIn} login={login} isErrorSubmit={isErrorSubmit} setIsErrorSubmit={setIsErrorSubmit} />} />
            <Route path="/movies" element={
              <ProtectedRoute element={Movies} isLoggedIn={isLoggedIn} />
            }/>
            <Route path="/saved-movies" element={
              <ProtectedRoute element={SavedMovies} isLoggedIn={isLoggedIn} />
            }/>
            <Route path="/profile" element={
              <ProtectedRoute element={Profile} updateProfile={updateProfile} logout={logout} isErrorSubmit={isErrorSubmit} setIsErrorSubmit={setIsErrorSubmit} />
            }/>
            <Route path="*" element={<Error />} />
          </Routes>
        </CurrentUserContext.Provider>
      </main>
      {footerRout ? <Footer /> : ""}
    </div>
  );
}

export default App;
