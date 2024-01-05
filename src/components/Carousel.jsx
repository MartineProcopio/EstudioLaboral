// Carousel.js

import React from "react";
import img1 from "../../public/carousel-1.jpg";
import img2 from "../../public/carousel-2.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item  active d-item">
          <img src={img1} class="d-block w-100 d-img" alt="..." >
        </div>
        <div class="carousel-item active d-item">
          <img src={img1} class="d-block w-100 d-img" alt="..." >
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
