"use client";

import React from "react";
import styles from  './acceuil.module.css'

export default function Page() {
  return (
    <>
      <div className={styles['home-container']}>
        <h1>
          Donnez à votre entreprise un avantage avec l&#39;IA
        </h1>
        <h2>
        Des outils d&#39;IA conviviaux pour aider votre PME à se développer et à innover
        </h2>
        <p>
        Notre objectif est de mettre la puissance de l&#39;intelligence artificielle à la portée des petites et moyennes entreprises. Nous offrons une gamme d&#39;outils d&#39;IA faciles à utiliser qui peuvent vous aider à améliorer vos processus, à augmenter votre efficacité et à prendre des décisions plus éclairées. Que ce soit pour l&#39;automatisation des tâches, l&#39;analyse de données ou l&#39;amélioration de l&#39;expérience client, nos solutions sont conçues pour vous permettre de profiter des avantages de l&#39;IA, sans avoir besoin d&#39;une expertise technique avancée. Avec notre soutien, votre entreprise peut naviguer vers l&#39;avenir en toute confiance.
        </p>
      </div>
    </>
  );
}
