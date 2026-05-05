import React from "react";
import styles from "./Header.module.css";
import logoImage from "../../assets/logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <img className={styles.logoImage} src={logoImage} alt='로고 이미지' />
      </div>
    </header>
  );
}
