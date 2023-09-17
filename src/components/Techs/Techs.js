import React from "react";
import "./Techs.css"

export default function Techs() {
  return (
    <section className="techs">
        <h2 className="techs__name" id="techs">Технологии</h2>
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__movies-cards">
            <li className="techs__element">HTML</li>
            <li className="techs__element">CSS</li>
            <li className="techs__element">JS</li>
            <li className="techs__element">React</li>
            <li className="techs__element">Git</li>
            <li className="techs__element">Express.js</li>
            <li className="techs__element">mongoDB</li>
        </ul>
    </section>
  );
}