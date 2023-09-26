import React, { useEffect } from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link, Navigate } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { EMAIL_REGEX } from "../../utils/constants";

function Login({ isLoggedIn, login, isErrorSubmit, setIsErrorSubmit }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    login(values);
  };

  function handleChangeInput(evt) {
    handleChange(evt);
    setIsErrorSubmit('');
  }

  useEffect(() => {
    resetForm();
    setIsErrorSubmit('');
  }, [resetForm, setIsErrorSubmit]);

  if (isLoggedIn) {
    return <Navigate to="/movies" />;
  }

  return (
    <section className="login">
      <form className="login__form" onSubmit={handleSubmit} noValidate>
        <Link to="/">
          <img className="logo login__form_logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="login__form_name">Рады видеть!</h1>
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
            pattern={EMAIL_REGEX}
            required
            onChange={handleChangeInput}
            value={values.email || ''}
          />
        </label>
        <span className={`login-form__error ${errors ? 'login-form__error_active' : ''}`}>{errors.email}</span>
        <label className="login__form_field">
          Пароль
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Пароль"
            className="login__form_info"
            minLength="8"
            maxLength="40"
            required
            onChange={handleChangeInput}
            value={values.password || ''}
          />
        </label>
        <span className={`login-form__error ${errors ? 'login-form__error_active' : ''}`}>{errors.password}</span>
        <span className={`login-form__submit-error ${isErrorSubmit ? 'login-form__submit-error_active' : ''}`}>{isErrorSubmit}</span>
        <button className="login__button" type="submit" disabled={!isValid}>
          Войти
        </button>
        <div className="login__support">
          <p className="login__support-text">Еще не зарегистрированы?</p>
          <Link to="/signup" className="login__support-link">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}
export default Login;