"use client";

import React, { useState } from "react";
import styles from "./connexion.module.css";

const getCookie = (name) => {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};

const toggleStatusUI = (display) => {
  console.log("will toggle");
  let status = document.querySelector(".".concat(styles.status));
  status.style.display = display;
};

const setToken = async (token, credentials) => {
  console.log(token);
  localStorage.setItem("auth_token", token);
  try {
    const resp = await fetch(
      process.env["NEXT_PUBLIC_BACKEND_URL"].concat("/auth/users/me/"),
      {
        method: "get",
        credentials: "same-origin",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRFToken": getCookie("csrftoken"),
          Authorization: "Token ".concat(localStorage.getItem("auth_token")),
        },
      },
    );
    const response = await resp.json();
    response.id ? setUserDetails(response) : toggleStatusUI("initial");
    window.location.assign("/");
  } catch (err) {
    console.log(err);
    toggleStatusUI("initial");
  }
};

const setUserDetails = (details) => {
  localStorage.setItem("id", details.id);
  localStorage.setItem("email", details.email);
  localStorage.setItem("username", details.username);
};

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    const data = { username: username, password: password };
    try {
      const resp = await fetch(
        process.env["NEXT_PUBLIC_BACKEND_URL"].concat("/auth/token/login/"),
        {
          method: "post",
          body: JSON.stringify(data),
          credentials: "same-origin",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken"),
          },
        },
      );
      const response = await resp.json();
      response.auth_token
        ? setToken(response.auth_token, data)
        : toggleStatusUI("none");
    } catch (err) {
      toggleStatusUI("initial");
    }
  };

  return (
    <div className={styles["auth-container"]}>
      <h1>Connexion</h1>
      <div className={styles.status}>
        <div className={styles.error}>
          <h3>Veuillez vérifier vos informations de connexion</h3>
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.username}>
          <label htmlFor="username">Nom d&#39;utilisateur :</label>
          <input
            type="text"
            required={true}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className={styles.password}>
          <label htmlFor="username">Mot de passe :</label>
          <input
            required={true}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button onClick={handleSubmit}>Se connecter</button>
      </div>
    </div>
  );
}
