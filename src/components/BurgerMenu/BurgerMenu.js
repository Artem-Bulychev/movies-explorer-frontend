import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";

export default function BurgerMenu() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  function handleEditBurgerClick() {
    setBurgerOpen(true);
 }
 function handleCloseBurgerClick() {
    setBurgerOpen(false);
 }

  return (
    <nav className="burger">
      <button className="burger-button" type="button"
      onClick={handleEditBurgerClick}
      >
        <span className="burger-button__line" />
      </button>
      {/* <div className="burger__movies burger__movies-inactive"> */}
      <div className={`burger__movies ${isBurgerOpen ? "": "burger__movies-inactive"}`}>
        <div className="burger__blur" />
        <button className="burger__close" type="button"
        onClick={handleCloseBurgerClick}/>
        <div className="burger__navigation">
          <Link to="/" className="burger__navigation-link">
            Главная
          </Link>
          <Link
            to="/movies"
            className="burger__navigation-link burger__navigation-link_active"
          >
            Фильмы
          </Link>
          <Link to="/saved-movies" className="burger__navigation-link burger__navigation-link_last-child">
            Сохранённые фильмы
          </Link>
          <Link to="/profile" className="burger__profile">
            Аккаунт
          </Link>
        </div>
      </div>

    </nav>
  );
}