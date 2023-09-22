import React from "react";
import "./NavBar.css"

export default function navigationBar() {
  return (
    <nav className="navigation-bar">
        <ul className="navigation-bar__menu">
            <li><a className="navigation-bar__element" href="#project">О проекте</a></li>
            <li><a className="navigation-bar__element" href="#techs">Технологии</a></li>
            <li><a className="navigation-bar__element" href="#about">Студент</a></li>
        </ul>
    </nav>
  );
}