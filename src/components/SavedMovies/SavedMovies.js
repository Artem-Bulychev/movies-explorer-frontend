import React from "react";
import "./SavedMovies.css"
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = () => {
  return (
    <section className="saved-movies">
        <SearchForm />
        <MoviesCardList />
        <div className="saved-movies__separator"></div>
    </section>
  );
};

export default SavedMovies;
