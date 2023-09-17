import React from "react";
import "./AboutProject.css"

export default function AboutProject() {
  return (
    <section className="about-project">
        <div className="about-project__container">
       <h2 className="about-project__name" id="project">О проекте</h2>
       <ul className="about-project__content">
        <li className="about-project__content-element">
          <h3 className="about-project__content-name">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__content-description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__content-element">
          <h3 className="about-project__content-name">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__content-description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__bar">
        <div className="about-project__bar-element">
            <p className="about-project__bar-backend">1 неделя</p>
            <p className="about-project__bar-text">Back-end</p>
        </div>
        <div className="about-project__bar-element">
            <p className="about-project__bar-frontend">4 недели</p>
            <p className="about-project__bar-text">Front-end</p>
        </div>
      </div>
      </div>
    </section>
  );
}