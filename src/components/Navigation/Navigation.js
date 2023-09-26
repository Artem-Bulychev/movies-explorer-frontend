import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import Profile from '../../images/profile.svg';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="navigation-box">
        <Link to="/movies" className="navigation-box__link navigation-box__link_active">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="navigation-box__link">
          Сохранённые фильмы
        </Link>
      </div>
      <Link to="/profile" className={`navigation__profile ${location.pathname === '/' ? 'navigation__profile_color-dark' : ''}`}>
        <img src={Profile} alt="Профиль" className="navigation__profile-icon" />
        Аккаунт
      </Link>
    </nav>
  );
}
