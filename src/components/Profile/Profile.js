import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <form className="profile-form">
        <h1 className="profile__name">Привет, Артём!</h1>
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
              required
            />
          </label>
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
              required
            />
          </label>
        <button className="profile__save" type="submit">
          Редактировать
        </button>
          <Link to="/" className="profile__signin-link">
            Выйти из аккаунта
          </Link>
        </form>
    </section>
  );
}
export default Profile;
