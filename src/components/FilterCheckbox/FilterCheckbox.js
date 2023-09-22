import React from 'react';
import "./FilterCheckbox.css"

export default function FilterCheckbox() {
  return (
    <form className="filter">
       <label className="filter-checkbox">
          <input className="filter-checkbox__input" type="checkbox"/>
          <span className="filter-checkbox__text"></span>
       </label>
       <p className="filter-name">Короткометражки</p>
    </form>
  );
}