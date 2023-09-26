import React from 'react';
import { Link } from "react-router-dom";
import "./Error.css"

export default function Error() {
  return (
    <section className="error">
        <h1 className="error__text-container">404</h1>
        <p className="error__name">Страница не найдена</p>
        <Link to="/" className="error__button">Назад</Link>
    </section>
  );
}