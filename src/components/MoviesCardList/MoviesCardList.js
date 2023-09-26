import React from 'react';
import "./MoviesCardList.css"
import Moviescard from '../MoviesCard/MoviesCard';

export default function MoviesCardList() {
  return (
    <section className="movies-container">
        <ul className="movies-container__list">
          <Moviescard/>
          <Moviescard/>
          <Moviescard/>
          <Moviescard/>
          <Moviescard/>
          <Moviescard/>
          <Moviescard/>
          <Moviescard/>
          <Moviescard/>
          <Moviescard/>
          <Moviescard/>
          <Moviescard/>
          <Moviescard/>
          <Moviescard/>
          <Moviescard/>
          <Moviescard/>
        </ul>
    </section>
  );
}