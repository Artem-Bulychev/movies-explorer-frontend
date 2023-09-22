import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation-box">
        <Link to="/movies" className="navigation-box__link navigation-box__link_active">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="navigation-box__link">
          Сохранённые фильм
        </Link>
      </div>
      <Link to="/profile" className="navigation__profile">
        Аккаунт
      </Link>
    </nav>
  );
}
