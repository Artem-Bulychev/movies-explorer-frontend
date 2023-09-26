import React from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox({ shortFilm, handleCheckBox }) {
  return (
    <div className='filter'>
      <label className='filter-checkbox'>
        <input className='filter-checkbox__input' type='checkbox' checked={shortFilm} onChange={handleCheckBox} />
        <span className='filter-checkbox__text'></span>
      </label>
      <p className='filter-name'>Короткометражки</p>
    </div>
  );
}