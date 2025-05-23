import React from "react";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { PortfolioTitle } from "../sections/PortfolioTitle";
import bebasMockup from "../assets/bebasMockup.webp";
import ChatGPT from "../assets/chatgpt.svg";
import Firefly from "../assets/firefly.svg";
import Figma from "../assets/figma.svg";
import BebasImg from "../assets/bebasImg.webp";
import BebasImg2 from "../assets/bebasImg2.webp";
import { PortfolioImg } from "../sections/PortfolioImg";

export const PortfolioBebas = () => {
  return (
    <div className="relative bg-[#FEEAED]">
      <Header />
      <PortfolioTitle
        mockupSrc={bebasMockup}
        mockupAlt="Mi Mockup"
        titlePrimary="Ecommerce"
        titleSecondary="BEBAS"
        aportes={[
          "Diseño de la identidad visual",
          "Diseño de la web en mobile y desktop",
          "Generación de imágenes con IA",
        ]}
        stackIcons={[
          { src: Figma, alt: "Figma" },
          { src: ChatGPT, alt: "ChatGPT" },
          { src: Firefly, alt: "Adobe Firefly" },
        ]}
        creditText="Este proyecto lo hice cursando la materia Diseño de Interfaces en 2021."
      />

      <PortfolioImg
        imgSrc={BebasImg}
        title="Mi marca deportiva creada para este proyecto"
        text="Bebas nace como mi marca de e-commerce deportivo creada especialmente para este proyecto. Gracias a Adobe Firefly, generé un prototipo con texturas increíblemente realistas, iluminación natural y colores vibrantes, todo ello libre de restricciones de derechos de autor."
      />
      <PortfolioImg
        imgSrc={BebasImg2}
        title="Proceso en Figma"
        text="Comencé diseñando wireframes de baja fidelidad en Figma para definir la estructura, la jerarquía visual y el flujo de usuario de Bebas sin distracciones estéticas. Tras validar esos esquemas básicos con el equipo, los llevé a alta fidelidad en Figma: apliqué la paleta de colores y tipografías de la marca, incorporé componentes reutilizables y sustituí marcadores por las imágenes realistas generadas en Adobe Firefly."
        invert
      />

      <Footer />
    </div>
  );
};
