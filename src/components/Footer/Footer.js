import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__navigation">
        <p className="footer__date">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__links-list">
          <li className="footer__list-item">
            <a
              className="footer__link"
              target="_blank"
              rel="noreferrer"
              href="https://practicum.yandex.ru/"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__list-item">
            <a
              className="footer__link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};