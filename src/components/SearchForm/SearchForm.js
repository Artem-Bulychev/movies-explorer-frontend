import React from 'react';
import "./SearchForm.css"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

export default function SearchForm() {
  return (
    <div className="search">
       <form className="search-form">
           <input className="search-form__input" type="text" name="search" placeholder="Фильм" required=""/>
           <button className="search-form__btn" type="submit" aria-label="Кнопка поиска"/>
       </form>
       <FilterCheckbox/>
    </div>
  );
}