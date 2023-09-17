import React from 'react';
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

export default function MoviesCard() {
  const { pathname } = useLocation();

  return (
    <div className="movies-card">
       <img className="movies-card__photo" src={''} alt="films"/>
       <div className="movies-card__container">
         <p className="movies-card__name">33 слова о дизайне </p>
         <button className={`${pathname === "/movies" ? "movies-card__btn-save-like" : "movies-card__btn-save-close"}`}></button>
       </div> 
       <p className="movies-card__time">1ч42м</p>
    </div>
  );
}