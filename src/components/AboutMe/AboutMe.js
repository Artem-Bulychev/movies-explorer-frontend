import React from 'react';
import './AboutMe.css';
import myPhoto from '../../images/photo_2023-02-01_15-30-17.jpg'


export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__id" id="about">Студент</h2>
      <div className="about-me__container">
        <h3 className="about-me__title">Артём</h3>
        <p className="about-me__subtitle">Фронтенд разработчик, 27 лет</p>
        <p className="about-me__description">Я живу в городе Ханты-Мансийске, закончил факультет энергетики в ЮГУ. У меня есть жена. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2018 года работаю в нефтегазовой компании. После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами.     </p>
        <a
          className="about-me__link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Artem-Bulychev"
        >
          Github
        </a>
      </div>
      <img className="about-me__avatar" src={myPhoto} alt="Аватар" />
    </section>
  );
};