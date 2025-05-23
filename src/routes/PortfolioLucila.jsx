import React from "react";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { PortfolioTitle } from "../sections/PortfolioTitle";
import lucilaMockup from "../assets/lucilaMockup.webp";
import Javascript from "../assets/javascript.svg";
import LucilaImg from "../assets/lucilaImg.webp";
import LucilaImg2 from "../assets/lucilaImg2.webp";
import Css from "../assets/css.svg";
import Html from "../assets/html.svg";
import { PortfolioImg } from "../sections/PortfolioImg";
import Illustrator from "../assets/illustrator.svg";
import Photoshop from "../assets/photoshop.svg";

export const PortfolioLucila = () => {
  return (
    <div className="relative bg-[#FEEAED]">
      <Header />
      <PortfolioTitle
        mockupSrc={lucilaMockup}
        mockupAlt="Lucila"
        titlePrimary="Lucila"
        titleSecondary="SISTEMA"
        aportes={["Diseño de identidad visual", "Desarrollo de web"]}
        stackIcons={[
          { src: Html, alt: "HTML" },
          { src: Css, alt: "CSS" },
          { src: Javascript, alt: "Javascript" },
          { src: Illustrator, alt: "Adobe Illustrator" },
          { src: Photoshop, alt: "Adobe Photoshop" },
        ]}
        creditText="Proyecto creado para Carpeta Anual 2 en 2022."
      />

      <PortfolioImg
        imgSrc={LucilaImg2}
        title="Web Interactiva de Portafolio"
        text="Desarrollé esta página creativa para presentar mis trabajos en el marco de una consigna de clase. Cada sección está organizada como carpetas, tal y como gestiono mis proyectos de diseño en mi propio equipo, lo que facilita la exploración y pone en valor la coherencia de mi workflow."
      />
      <PortfolioImg
        imgSrc={LucilaImg}
        title="Sistema Operativo Personalizado"
        text="Implementé un “mini SO” que muestra fecha y hora en tiempo real y permite navegar entre archivos agrupados por tipo de proyecto. El resultado incluye interacciones y animaciones en CSS de alto impacto, que refuerzan la experiencia y destacan la estética del diseño."
        invert
      />

      <Footer />
    </div>
  );
};
