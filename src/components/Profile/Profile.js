import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <main className="profile">
      <form className="profile">
        <p className="profile__name">Привет, Артём!</p>
          <label className="profile__field">
            <input
              id="name"
              type="name"
              name="name"
              value=""
              placeholder="Имя"
              className="profile__info"
              minLength="2"
              maxLength="40"
              required=""
            />
            Виталий
          </label>
          <hr className="profile__line"></hr>
          <label className="profile__field">
          <input
            id="email"
            type="email"
            name="email"
            value=""
            placeholder="Email"
            className="profile__info"
            minLength="2"
            maxLength="40"
            required=""
          />
          mail@yandex.ru
          </label>
            
        <button className="profile__save" type="submit">
          Редактировать
        </button>
          <Link to="/signin" className="profile__signin-link">
            Выйти из аккаунта
          </Link>
        </form>
    </main>
  );
}
export default Profile;
