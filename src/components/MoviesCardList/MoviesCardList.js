import React from 'react';
import "./MoviesCardList.css"
import Moviescard from '../MoviesCard/MoviesCard';

export default function MoviesCardList() {
  return (
    <div className="movies-container">
        <ul className="movies-container__list">
          <li><Moviescard/></li>
          <li><Moviescard/></li>
          <li><Moviescard/></li>
          <li><Moviescard/></li>
          <li><Moviescard/></li>
          <li><Moviescard/></li>
          <li><Moviescard/></li>
          <li><Moviescard/></li>
          <li><Moviescard/></li>
          <li><Moviescard/></li>
          <li><Moviescard/></li>
          <li><Moviescard/></li>
          <li><Moviescard/></li>
          <li><Moviescard/></li>
        </ul>
        <button className="movies-container__btn-more" type="button" aria-label="Кнопка 'Еще'">Ещё</button>
    </div>
  );
}