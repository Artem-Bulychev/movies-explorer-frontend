import React, { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import FindIcon from '../../images/find-icon.svg';

export default function SearchForm({ searchQuery, setSearchQuery, handleSearch, shortFilm, handleCheckBox }) {
  const [inputError, setInputError] = useState('');

  function handleChange(evt) {
    setSearchQuery(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (searchQuery === '') {
      setInputError('Нужно ввести ключевое слово');
    } else {
      handleSearch();
      setInputError('');
    }
  }

  return (
    <div className='search'>
      <form className='search-form' onSubmit={handleSubmit} noValidate>
        <div className='search-container'>
          <img src={FindIcon} alt='Поиск' className='search-form__icon' />
          <input
            className='search-form__input'
            type='text'
            name='search'
            placeholder='Фильм'
            required
            onChange={handleChange}
            value={searchQuery}
          />
          <button className='search-form__btn' type='submit' aria-label='Кнопка поиска' />
        </div>
        <FilterCheckbox shortFilm={shortFilm} handleCheckBox={handleCheckBox} />
      </form>
    <span className={`search-form__submit-error ${inputError ? 'search-form__submit-error_active' : ''}`}>{inputError}</span>
    </div>
  );
}