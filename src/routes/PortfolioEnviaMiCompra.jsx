import React from "react";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { PortfolioTitle } from "../sections/PortfolioTitle";
import enviaMockup from "../assets/enviaMockup.webp";
import EnviaImg from "../assets/enviaImg.webp";
import EnviaImg2 from "../assets/enviaImg2.webp";
import Figma from "../assets/figma.svg";
import { PortfolioImg } from "../sections/PortfolioImg";

export const PortfolioEnviaMiCompra = () => {
  return (
    <div className="relative bg-[#FEEAED]">
      <Header />
      <PortfolioTitle
        mockupSrc={enviaMockup}
        mockupAlt="Envia mi compra"
        titlePrimary="Envia mi"
        titleSecondary="COMPRA"
        aportes={["Rediseño de la web", "Diseño de elementos identitarios"]}
        stackIcons={[{ src: Figma, alt: "Figma" }]}
        creditText="Se rediseñó la web teniendo en cuenta la identidad visual de la marca ya definida anteriormente. Este proyecto fue realizado en 2024."
      />

      <PortfolioImg
        imgSrc={EnviaImg}
        title="Coherencia Visual y UX"
        text="En Novoid llevamos a cabo el rediseño de la web de Envia Mi Compra, aplicando fielmente su identidad visual ya establecida. Creamos un sistema de estilos que garantiza coherencia gráfica y consistencia cromática en cada sección, desde tipografías y paleta de colores hasta iconografía y espacios en blanco."
      />
      <PortfolioImg
        imgSrc={EnviaImg2}
        title="Desafíos de Implementación"
        text="Aunque el proyecto avanzó hasta la fase de prototipado en alta fidelidad —incluyendo pruebas de usabilidad y validación con stakeholders— finalmente no se implementó en producción. El principal factor fue el elevado costo de migración a nuevas tecnologías, que habría superado el presupuesto asignado."
        invert
      />

      <Footer />
    </div>
  );
};
