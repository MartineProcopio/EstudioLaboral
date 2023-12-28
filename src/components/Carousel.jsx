// Carousel.js

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  return (
    <div>
      <div>
        <img src="carousel-1.jpg" alt="Imagen 1" />
      </div>
      <div>
        <img src="carousel-2.jpg" alt="Imagen 2" />
      </div>

      {/* Agrega más diapositivas según sea necesario */}
    </div>
  );
};

export default Carousel;
