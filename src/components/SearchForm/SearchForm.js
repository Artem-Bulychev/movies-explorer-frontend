import React from 'react';
import "./SearchForm.css"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import FindIcon from '../../images/find-icon.svg';

export default function SearchForm() {
  return (
    <section className="search">
        <form className="search-form">
          <div className="search-container">
            <img src={FindIcon} alt="Поиск" className="search-form__icon" />
            <input className="search-form__input" type="text" name="search" placeholder="Фильм" required />
            <button className="search-form__btn" type="submit" aria-label="Кнопка поиска"/>
          </div>
          <FilterCheckbox/>
        </form>
    </section>
  );
}