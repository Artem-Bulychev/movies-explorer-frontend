import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.css";
import { routesGreyHeader, SCREEN_MD } from "../../utils/constants";
import Navigation from "../Navigation/Navigation";

export default function Header({ isLoggedIn }) {
  const { pathname } = useLocation();
  const headRoutes = routesGreyHeader.find((item) => {
    return item === pathname;
  });

  let resize;

  const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = (event) => {
        setWidth(event.target.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return width <= SCREEN_MD;
  };

  resize = useResize();
  
  return (
    <header
      className={`header ${pathname === "/" ? "header_main" : ""} ${
        headRoutes ? "header__all" : ""
      }`}
    >
      <Link to="/" className="header__logo">
        <img className="header__logo-img" src={logo} alt="Логотип" />
      </Link>
      {
        !isLoggedIn ? (
          <div className="header__container">
            <nav className="header__container-box">
              <Link to="/signup" className="header__container-link">
                Регистрация
              </Link>
              <Link to="/signin" className="header__container-link">
                Войти
              </Link>
            </nav>
          </div>
        ) : (
          resize ? <BurgerMenu /> : <Navigation />
        )
      }
    </header>
  );
}
