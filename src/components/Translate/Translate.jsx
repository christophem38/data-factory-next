"use client";

import React, { useState } from "react";
import styles from "./translate.module.css";
import Image from "next/image";
import successImg from "@/images/success-player-multimedia-svgrepo-com.svg";
import errorImg from "@/images/error-outline-svgrepo-com.svg";

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

const toggleErrorUI = () => {
  let container = document.querySelector(".".concat(styles.error));
  container.style.display = "flex";
  setTimeout(() => {
    container.style.display = "none";
  }, 2000);
};

const toggleSuccessUI = () => {
  let container = document.querySelector(".".concat(styles.success));
  container.style.display = "flex";
  setTimeout(() => {
    container.style.display = "none";
  }, 2000);
};

export default function Translate() {
  const [request, setRequest] = useState("");
  const [targetLang, setTargetLang] = useState("eng");
  const handleSubmit = async () => {
    const data = { query: request, to: targetLang, user: 1 };
    try {
      const resp = await fetch("http://localhost:8000/api/Translations/", {
        method: "post",
        body: JSON.stringify(data),
        credentials: "same-origin",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRFToken": getCookie("csrftoken"),
          Authorization: "Basic " + btoa("root:root"),
        },
      });
      const response = await resp.json();
      let inputField = document.querySelector(
        ".".concat(styles.response, " textarea"),
      );
      inputField.value = response.result;
      toggleSuccessUI();
    } catch (err) {
      console.log(err);
      toggleErrorUI();
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fields}>
          <form className={styles.request}>
            <div className={styles['select-container']}>
              <label htmlFor="request">Texte à traduire :</label>
              <select
                name="to"
                id="to"
                required={true}
                onChange={(e) => setTargetLang(e.target.value)}
              >
                <option value="">
                  ------ Choisir la langue de votre traduction ------
                </option>
                <option value="eng">Anglais</option>
                <option value="fr">Francais</option>
                <option value="it">Italien</option>
                <option value="es">Espagnol</option>
                <option value="cn">Chinois</option>
                <option value="jp">Japonais</option>
                <option value="ar">Arabe</option>
              </select>
            </div>
            <textarea
              onChange={(e) => setRequest(e.target.value)}
              cols={30}
              rows={10}
            />
          </form>

          <div className={styles.response}>
            <label htmlFor="response">Traduction :</label>
            <textarea readOnly cols={30} rows={10} />
          </div>
        </div>
        <div className={styles.submit}>
          <button type="submit" onClick={() => handleSubmit()}>
            Traduire
          </button>
          <div className={styles.status}>
            <div className={[styles.success].join(" ")}>
              <Image src={successImg} alt="success" height={20} />
              <h5>La traduction a été réalisé avec succès !</h5>
            </div>
            <div className={[styles.error].join(" ")}>
              <Image src={errorImg} height={30} alt="error" />
              <h5>Une erreur est survenue lors de la traduction !</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
