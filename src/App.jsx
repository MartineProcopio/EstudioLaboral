import "./App.css";
import "./components/Header";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../public/logo.jpg";
import img2 from "../public/carousel-2.jpg";
import img3 from "../public/whatsapp.svg";
import img4 from "../public/despido.png";
import img5 from "../public/indemnizacion.png";
import img6 from "../public/accidentes.png";
import face from "../public/facebook.png";
import link from "../public/linkedin.png";

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
    <section id="inicio">
      <div id="carouselExample" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img2} class="d-block w-100" alt="Imagen 1" />
            <div class="carousel-caption d-none d-md-block">
              <h3 class="display-1 fs-3 text-capitalize">Abogados Laborales</h3>
              <p>Consulta sin cargo</p>
              <button class="btn btn-primary"> CONTACTO</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div>
      <header>
        <div class="logo"><div class="row bg-white border-bottom d-none d-lg-flex">
            <div class="col-lg-7 text-left">
                <div class="h-100 d-inline-flex align-items-center py-2 px-3">
                    <i class="fa fa-envelope text-primary mr-2"></i>
                    <small>info@example.com</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center py-2 px-2">
                    <i class="fa fa-phone-alt text-primary mr-2"></i>
                    <small>+012 345 6789</small>
                </div>
            </div>
            <div class="col-lg-5 text-right">
                <div class="d-inline-flex align-items-center p-2">
                    <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                        <i class="fab fa-facebook-f"><img class="What" src={face}></img></i>
                    </a>
                    <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                        <i class="fab fa-twitter"><img class="What" src={link}></img></i>
                    </a>
                    <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div></div>
        <nav class='main-menu-v2'>
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

      {/*imagen header*/}
      <div id="carouselExample">
        <div class="carousel-inner">
          <div>
            <img src={img2} class="w-80 " alt="Imagen 1" />
            <div class="carousel-caption d-none d-md-block">
              <h3 class="display-1 fs-3 text-capitalize">Abogados Laborales</h3>
              <p>Consulta sin cargo</p>
              <button class="btn btn-primary"> CONTACTO</button>
            </div>
          </div>
        </div>
      </div>

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
        <p>&copy; 2023 Bufete Legal<span> AbogadosLaboral.com.ar</span></p>
      </footer>
    </div>
  );
}
