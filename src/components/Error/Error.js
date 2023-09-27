import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Error.css"

export default function Error() {
  const navigate = useNavigate();

  const prevPage = () => {
    navigate(-1);
  };

  return (
    <section className="error">
        <h1 className="error__text-container">404</h1>
        <p className="error__name">Страница не найдена</p>
        <button to="/" className="error__button" onClick={prevPage}>Назад</button>
    </section>
  );
}