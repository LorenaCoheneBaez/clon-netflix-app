import React, { useEffect } from "react";
import { apiEntity } from "../../services/apiConfig";
import useApi from "../../hooks/useApi";
import Separator from "../Separator/Separator";
import styles from "./Banner.module.css";

const Banner = () => {
  const [movie, loading, error, randomMovie, backImg] = useApi(
    apiEntity.popularMovies
  );

  return (
    <div
      className={`${styles.banner_container}`}
      style={
        loading
          ? { backgroundImage: "none" }
          : {
              backgroundImage: `url(${backImg})`,
            }
      }
    >
      <div className={styles.banner_gradient}>
        <Separator height={"150px"} />
        <div className={styles.banner_div_subtitle}>
          <span>
            <img
              className={styles.banner_logo_subtitle}
              src="./assets/n-netflix.png"
              alt="Logo N de Netflix"
            />
          </span>
          <h6 className={styles.banner_subtitle}>Película</h6>
        </div>
        <div className={styles.banner_title}>
          <h1>{loading ? "Loading..." : randomMovie?.title}</h1>
        </div>
        <Separator height={"40px"} />

        <div className={styles.banner_description}>
          <h2>{loading ? "Loading..." : randomMovie?.overview.split(".")}</h2>
        </div>
        <div className={styles.banner_buttons_container}>
          <div className={styles.banner_buttons}>
            <button className={styles.banner_button}>
              <span className={styles.banner_span}>
                <i className="bi bi-play-fill"></i>
              </span>
              Reproducir
            </button>

            <button
              className={styles.banner_button_play}
            >
              <span className={styles.banner_span}>
                <i className="bi bi-info-circle"></i>
              </span>
              Más información
            </button>
          </div>
          <div className={styles.banner_more_buttons}>
            <p className={styles.banner_more_buttons_volume}>
              <i className="bi bi-volume-mute-fill"></i>
            </p>

            <p className={styles.banner_more_buttons_adult}>
              {loading
                ? "Loading..."
                : randomMovie?.adult == false
                ? "ATP"
                : "+16"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
