import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { NAME_REGEX, EMAIL_REGEX } from "../../utils/constants";

function Register({ isLoggedIn, register, isErrorSubmit, setIsErrorSubmit }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    register(values);
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
    <section className="register">
      <form className="register-form" onSubmit={handleSubmit} noValidate>
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
            pattern={NAME_REGEX}
            required
            onChange={handleChangeInput}
            value={values.name || ''}
          />
        </label>
        <span className={`register-form__error ${errors.name ? 'register-form__error_active' : ''}`}>{errors.name}</span>
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
            pattern={EMAIL_REGEX}
            required
            onChange={handleChangeInput}
            value={values.email || ''}
          />
        </label>
        <span className={`register-form__error ${errors.email ? 'register-form__error_active' : ''}`}>{errors.email}</span>
        <label className="register-form__field">
          Пароль
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Пароль"
            className="register-form__info"
            minLength="8"
            maxLength="40"
            required
            onChange={handleChangeInput}
            value={values.password || ''}
          />
        </label>
        <span className={`register-form__error ${errors.password ? 'register-form__error_active' : ''}`}>{errors.password}</span>
        <span className={`register-form__submit-error ${isErrorSubmit ? 'register-form__submit-error_active' : ''}`}>{isErrorSubmit}</span>
        <button className="register-form__save" type="submit" disabled={!isValid}>
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