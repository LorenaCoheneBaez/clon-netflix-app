import React from "react";
import { apiEntity } from "../services/apiConfig";
import Banner from "../components/Banner/Banner";
import Carousel from "../components/Carousel/Carousel";
import Separator from "../components/Separator/Separator";
import styles from "./Homepage.module.css"

const Homepage = () => {
  return (
    <>
      <Banner />
      <Separator height={"40px"} />
      <div className={styles.carousel_container}>
      <Carousel
        entity={apiEntity.popularMovies}
        title={"Películas populares"}
      />
      <Separator height={"40px"} />
      <Carousel
        entity={apiEntity.topRatedMovies}
        title="Películas mejor puntuadas"
      />
      <Separator height={"40px"} />
      <Carousel entity={apiEntity.popularTv} title="Series populares" />
      <Separator height={"40px"} />
      <Carousel entity={apiEntity.topRatedTv} title="Series mejor puntuadas" />
      </div>
    </>
  );
};

export default Homepage;
