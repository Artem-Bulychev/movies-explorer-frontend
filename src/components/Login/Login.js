import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";


function Login() {
  return (
    <main className="login">
      <form className="login__form">
        <Link to="/">
          <img className="logo login__form_logo" src={logo} alt="Логотип" />
        </Link>
        <p className="login__form_name">Рады видеть!</p>
          <label className="login__form_field">
            E-mail
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="login__form_info"
            minLength="2"
            maxLength="40"
            required=""
          />
          </label>
          <label className="login__form_field">
            Пароль
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Пароль"
            className="login__form_info"
            minLength="6"
            maxLength="40"
            required=""
          />
           </label>
            

        <button className="login__button" type="submit">
          Войти
        </button>
        <div className="login__support">
          <p className="login__support-text">Еще не зарегистрированы?</p>
          <Link to="/signup" className="login__support-link">
          Регистрация
          </Link>
        </div>
        </form>
    </main>
  );
}
export default Login;
