import "./App.css";
import "./components/Header";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../public/carousel-1.jpg";
import img2 from "../public/carousel-2.jpg";
import img3 from "../public/whatsapp.svg";
import img4 from "../public/despido.png";
import img5 from "../public/indemnizacion.png";
import img6 from "../public/accidentes.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
    // Intervalo de cambio de diapositivas en milisegundos (5 segundos en este caso)
  };

  return (
    
    <Slider  {...settings} >
      
      <div class='slider'>
        <img   src={img1} alt="Imagen 1" />
        <div class="slider-content">
            <div class="slider-content-inner text-center">
                <h2>Abogados Laborales</h2>
                <h3>CONSULTA SIN CARGO</h3>
                <div class="slider-button">
                    <a href="##" target="formubox"  class="btn btn-primary"><i class="fa fa-hand-o-right" aria-hidden="true"></i> Consultar Ahora Online</a>
                </div>
            </div>
        </div>
        
      </div>
      <div>
        <img src={img2} alt="Imagen 2" />
      </div>

      {/* Agrega más diapositivas según sea necesario */}
    </Slider>
  );
};

export default function App() {
  return (
    <div>
      <header>
        <div class="logo">Nombre del Estudio</div>
        <nav>
          <ul>
            <li>
              <a href="#inicio" id="inicioheader">
                Inicio
              </a>
            </li>
            <li>
              <a href="#nosotros">Nosotros</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
      
        <Carousel />
      
     

      <section id="inicio">
        <h2>Bienvenido al Bufete Legal</h2>
        <p>Expertos en casos laborales.</p>
      </section>

      <section id="nosotros">
        <h2 id="nosotros">Nosotros</h2>
        <p>
          Somos un Estudio Jurídico de abogados especializado en Derecho
          Laboral, con más de 40 años de trayectoria profesional. Nuestros
          abogados laboralistas brindan un asesoramiento personalizado y
          profesional al trabajador, caracterizándonos por nuestra responsable
          labor profesional. Asesoramos al trabajador en los reclamos de sus
          derechos laborales para obtener lo que por ley le corresponde. El
          asesoramiento legal para trabajadores es gratuito, sin cargo.
        </p>
      </section>

      <section id="servicios">
        <h2>Servicios</h2>
        <ul id="servicios">
          <img class="What" src={img4}></img>
          <p>Asesoramiento en Despidos</p>
          <img class="What" src={img5}></img>
          <p>Indemnización</p>
          <img class="What" src={img6}></img>
          <p>Accidentes de Trabajo</p>
        </ul>
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
        <p>
          <a href="https://wa.me/541133902655" target="_blank">
            <img class="What" src={img3}></img>11-3390-2655 (24 hs! Todos los
            días)
          </a>
        </p>
      </section>

      <footer>
        <p>&copy; 2023 Bufete Legal</p>
      </footer>
    </div>
  );
}
