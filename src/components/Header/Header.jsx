import React from "react";
import styles from './header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>Outils utilisant l&apos;API d&apos;OPEN AI</h1>
      </div>
    </div>
  );
}
