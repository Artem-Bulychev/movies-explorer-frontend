import React from 'react';
import "./MoviesCard.css";
import films from "../../images/films.jpg";
import { useLocation } from "react-router-dom";

export default function MoviesCard() {
  const { pathname } = useLocation();

  return (
    <div className="movies-card">
       <img className="movies-card__photo" src={films} alt="films"/>
       <div className="movies-card__container">
         <h2 className="movies-card__name">33 слова о дизайне </h2>
         <button className={`${pathname === "/movies" ? "movies-card__btn-save-like" : "movies-card__btn-save-close"}`} type="button"></button>
       </div> 
       <p className="movies-card__time">1ч42м</p>
    </div>
  );
}