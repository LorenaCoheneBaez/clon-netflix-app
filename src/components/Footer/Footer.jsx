import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer_superior}>
        <p className={styles.footer_superior_social}>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-youtube"></i>
        </p>

        <div className={styles.footer_container_grid}>
          <div className={styles.footer_container_grid_p}>
            <p>Audio y subtítulos</p>
            <p>Prensa</p>
            <p>Privacidad</p>
            <p>Contactános</p>
          </div>
          <div className={styles.footer_container_grid_p}>
            <p>Audio descriptivo</p>
            <p>Relaciones con inversionistas</p>
            <p>Avisos legales</p>
          </div>
          <div className={styles.footer_container_grid_p}>
            <p>Centro de ayuda</p>
            <p>Empleo</p>
            <p>Preferencia de cookies</p>
          </div>
          <div className={styles.footer_container_grid_p}>
            <p>Tarjetas de regalo</p>
            <p>Términos de uso</p>
            <p>Información corporativa</p>
          </div>
        </div>
      <button type="button" className={styles.footer_button}>Código de servicio</button>
      </div>
      <div className={styles.footer_development}>
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
    </>
  );
};

export default Footer;
