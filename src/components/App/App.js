import { Route, Routes, useLocation } from "react-router-dom";
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

function App() {
  const { pathname } = useLocation();
  const headRout = routesHeader.find((item) => {
    return item === pathname;
  });
  const footerRout = routesWithFooter.find((item) => {
    return item === pathname;
  });

  return (
    <div className="App">
      {headRout ? <Header /> : ""}
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      {footerRout ? <Footer /> : ""}
    </div>
  );
}

export default App;
