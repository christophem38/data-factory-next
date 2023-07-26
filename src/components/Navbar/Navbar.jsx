"use client";

import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import logo from "@/images/data-factory-logo.jpeg";
import bars from "@/images/bars.svg";
import logout from "@/images/logout-svgrepo-com.svg";
import Image from "next/image";

const logoutUser = () => {
  localStorage.clear();
  window.location.assign("/");
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window != undefined) {
      window.addEventListener("resize", (e) => {
        let width = e.target.innerWidth;
        if (width > 980) setIsOpen(false);
      });
    }
  }, []);

  return (
    <>
      <nav className={[styles["primary-nav"], styles.navbar].join(" ")}>
        <a href="/acceuil">
          <div className={styles["logo"]}>
            <Image src={logo} alt="" height={30} />
          </div>
        </a>
        <div className={styles["navlist-container"]}>
          <ul>
            <a href="/acceuil">
              <li>Acceuil</li>
            </a>
            <a href="/traducteur">
              <li>Traducteur</li>
            </a>
            {localStorage.getItem("auth_token") && (
              <a onClick={logoutUser}>
                <li>
                  <Image src={logout} height={25} alt="deconnexion" />
                </li>
              </a>
            )}
            {!localStorage.getItem("auth_token") && (
              <a href="/connexion">
                <li>Se connecter</li>
              </a>
            )}
          </ul>
        </div>
        <div className={[styles.hamburger]}>
          <span onClick={() => setIsOpen(!isOpen)}>
            <Image src={bars} alt="bars" />
          </span>
          {isOpen && (
            <div className={styles["hidden-navbar"]}>
              <ul>
                <a href="/">
                  <li>Acceuil</li>
                </a>
                <a href="/traducteur">
                  <li>Traducteur</li>
                </a>
                {localStorage.getItem("auth_token") && (
                  <a onClick={logoutUser}>
                    <li>Déconnexion</li>
                  </a>
                )}
                {!localStorage.getItem("auth_token") && (
                  <a href="/connexion">
                    <li>Connexion</li>
                  </a>
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
