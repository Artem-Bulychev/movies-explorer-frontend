import React from "react";
import MoviesCardList from "..//MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import MoreButton from "../MoreButton/MoreButton";

const Movies = () => {
  return (
    <section className="movies">
        <SearchForm />
        <MoviesCardList />
        <MoreButton />
    </section>
  );
};

export default Movies;
