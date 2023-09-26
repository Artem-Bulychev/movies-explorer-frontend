import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { NAME_REGEX, EMAIL_REGEX } from "../../utils/constants";

function Profile({ updateProfile, logout, isErrorSubmit, setIsErrorSubmit }) {
  const { values, setValues, handleChange, errors, isValid, resetForm } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);

  const initialValues = values.name !== currentUser.name || values.email !== currentUser.email;

  function handleSubmit(evt) {
    evt.preventDefault();
    updateProfile(values);
  };

  function handleChangeInput(evt) {
    handleChange(evt);
    setIsErrorSubmit('');
  }

  useEffect(() => {
    if (currentUser) {
      resetForm();
      setValues(currentUser);
      setIsErrorSubmit('');
    }
    }, [currentUser, resetForm, setValues, setIsErrorSubmit])

  return (
    <section className="profile">
      <form className="profile-form" onSubmit={handleSubmit} noValidate>
        <h1 className="profile__name">Привет, {currentUser.name}!</h1>
          <label className="profile__field">
            Имя
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Имя"
              className="profile__info"
              minLength="2"
              maxLength="40"
              pattern={NAME_REGEX}
              required
              onChange={handleChangeInput}
              value={values.name || ''}
            />
          </label>
          <span className={`profile-form__error ${errors ? 'profile-form__error_active' : ''}`}>{errors.name}</span>
          <label className="profile__field">
            E-mail
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="profile__info"
              minLength="2"
              maxLength="40"
              pattern={EMAIL_REGEX}
              required
              onChange={handleChangeInput}
              value={values.email || ''}
            />
          </label>
          <span className={`profile-form__error ${errors ? 'profile-form__error_active' : ''}`}>{errors.email}</span>
          <span className={`profile-form__submit-error ${isErrorSubmit ? 'profile-form__submit-error_active' : ''}`}>{isErrorSubmit}</span>
          <button className="profile__save" type="submit" disabled={!isValid || !initialValues}>
            Редактировать
          </button>
          <Link to="/" className="profile__signin-link" onClick={logout}>
            Выйти из аккаунта
          </Link>
        </form>
    </section>
  );
}
export default Profile;
