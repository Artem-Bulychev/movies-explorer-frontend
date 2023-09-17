import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.css";
import { greyHeaderRoutes, SCRN } from "../../utils/constants";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const { pathname } = useLocation();
  const headRoutes = greyHeaderRoutes.find((item) => {
    return item === pathname;
  });

  let res;

  const useRes = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handRes = (event) => {
        setWidth(event.target.innerWidth);
      };
      window.addEventListener("res", handRes);
      return () => {
        window.removeEventListener("res", handRes);
      };
    }, []);

    return width <= SCRN;
  };

  res = useRes();
  
  return (
    <header
      className={`header ${pathname === "/" ? "header_main" : ""} ${
        headRoutes ? "header__all" : ""
      }`}
    >
      <Link to="/">
        <img className="logo" src={logo} alt="Логотип" />
      </Link>
      <Routes>
        <Route
          path="/movies"
          element={res ? <BurgerMenu /> : <Navigation />}
        />
        <Route
          path="/saved-movies"
          element={res ? <BurgerMenu /> : <Navigation />}
        />
        <Route
          path="/profile"
          element={res ? <BurgerMenu /> : <Navigation />}
        />
        <Route
          path="/"
          element={
            <div className="header__container">
              <div className="header__container-box">
                <Link to="/signup" className="header__container-link">
                  Регистрация
                </Link>
                <Link to="/signin" className="header__container-link">
                  Войти
                </Link>
              </div>
            </div>
          }
        />
      </Routes>
    </header>
  );
}
