import React from "react";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { PortfolioTitle } from "../sections/PortfolioTitle";
import vibratoMockup from "../assets/vibratoMockup.webp";
import ChatGPT from "../assets/chatgpt.svg";
import ReactSVG from "../assets/react.svg";
import Vite from "../assets/vite.svg";
import { PortfolioImg } from "../sections/PortfolioImg";
import Tailwind from "../assets/tailwind.svg";
import Premier from "../assets/premier.svg";
import Illustrator from "../assets/illustrator.svg";
import Photoshop from "../assets/photoshop.svg";
import After from "../assets/after.svg";
import Figma from "../assets/figma.svg";
import Midjourney from "../assets/midjourney.svg";
import Latin from "../assets/latincloud.svg";
import VibratoImg from "../assets/vibratoimg.webp";
import VibratoImg2 from "../assets/vibratoimg2.webp";

export const PortfolioVibrato = () => {
  return (
    <div className="relative bg-[#FEEAED]">
      <Header />
      <PortfolioTitle
        mockupSrc={vibratoMockup}
        mockupAlt="Vibrato Web"
        titlePrimary="Música"
        titleSecondary="VIBRATO"
        aportes={[
          "Estrategia de comunicación",
          "Rediseño de indentidad visual",
          "Material creativo generado con IA",
          "Diseño y desarrollo web y app",
          "Creación integral de videos para cursos",
          "Diseño de piezas físicas",
        ]}
        stackIcons={[
          { src: ChatGPT, alt: "ChatGPT" },
          { src: ReactSVG, alt: "React" },
          { src: Vite, alt: "Vite" },
          { src: Tailwind, alt: "Tailwind" },
          { src: Premier, alt: "Adobe Premier" },
          { src: Illustrator, alt: "Adobe Illustrator" },
          { src: Photoshop, alt: "Adobe Photoshop" },
          { src: After, alt: "Adobe After Effects" },
          { src: Figma, alt: "Figma" },
          { src: Midjourney, alt: "Midjourney" },
          { src: Latin, alt: "Latin Cloud" },
        ]}
        creditText="Agradecimientos a Pedro Hordeñana, fundador de Vibrato por la dispoción y confianza en el desarrollo de este proyecto. Realizado para Proyecto Integrador en 2024-2025."
      />

      <PortfolioImg
        imgSrc={VibratoImg}
        title="Página web y aplicación"
        text="Incluye una Agenda online integrada con Calendly y Google Calendar para agendar clases, y una sección de Producción musical con servicios y portafolio. Tiene una App adentro de la web que se llama Song Studio, la cual permite buscar letras, generar compases y crear material para imprimir. La sección de Contacto cuenta con formulario vía EmailJS e información de ubicación. El sitio es responsive, está alojado en servidor y ya está disponible online."
        buttonTitle="Ver web"
        onButtonClick={() => window.open("https://vibrato.com.uy", "_blank")}
      />
      <PortfolioImg
        imgSrc={VibratoImg2}
        title="Rediseño de identidad y expansión de marca"
        text="Se desarrolló un nuevo logotipo, acompañado de una paleta de colores versátil, tipografías seleccionadas y texturas retro que equilibran lo moderno con lo clásico. Se mantuvo el isotipo original para asegurar continuidad visual. Además, se definieron dos estilos visuales —fotografía e imágenes generadas por IA— para reforzar la identidad y adaptarse a redes sociales. Se diseñaron piezas físicas como púas, stickers, correa de guitarra y palos de batería, alineadas con la estética de Vibrato. También se propuso un curso piloto, “Grabación de voces en home studio”, compuesto por videos breves de entre 1 y 5 minutos.

"
        invert
        buttonTitle="Ver video"
        onButtonClick={() =>
          window.open(
            "https://drive.google.com/file/d/152t8Dg2S8lwkg5j3JzxQ2alPcCdZE7Gy/view?usp=sharing",
            "_blank"
          )
        }
      />

      <Footer />
    </div>
  );
};
