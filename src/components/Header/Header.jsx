import React from "react";
import styles from './header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>Outils utilisant l&apos;API d&apos;OPEN AI</h1>
        <h3>Découvrez cette nouvelle fonction de traduction, propulsée par l&apos;IA d&apos;OpenAI, pour un texte clair et précis dans la langue de votre choix.</h3>
      </div>
    </div>
  );
}
