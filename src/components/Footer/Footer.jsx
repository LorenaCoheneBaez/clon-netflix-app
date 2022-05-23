import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        Desarrollado con{" "}
        <i className={`bi bi-balloon-heart-fill ${styles.heart}`}></i> por{" "}
        <a
          className={styles.linkFooter}
          href="https://github.com/LorenaCoheneBaez"
          target="_blank"
          rel="noreferrer nofollow noopener"
        >
          Lorena Cohene Báez
        </a>
      </p>
    </div>
  );
};

export default Footer;
