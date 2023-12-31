import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="register">
      <form className="register-form">
        <Link to="/" className="register-form__logo-link">
          <img className="register-form__logo-img" src={logo} alt="Логотип" />
        </Link>
        <h1 className="register-form__title">Добро пожаловать!</h1>
        <label className="register-form__field">
          Имя
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Имя"
            className="register-form__info"
            minLength="2"
            maxLength="40"
            required
          />
        </label>
        <label className="register-form__field">
          E-mail
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="register-form__info"
            minLength="2"
            maxLength="40"
            required
          />
        </label>
        <label className="register-form__field">
          Пароль
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Пароль"
            className="register-form__info"
            minLength="6"
            maxLength="40"
            required
          />
        </label>
        <p className="register-form__error">Что-то пошло не так...</p>
        <button className="register-form__save" type="submit">
          Зарегистрироваться
        </button>
        <div className="register__signin">
          <p className="register__signin-text">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__signin-link">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}
export default Register;