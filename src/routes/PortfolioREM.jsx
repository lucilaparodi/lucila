import React from "react";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { PortfolioTitle } from "../sections/PortfolioTitle";
import remMockup from "../assets/remMockup.webp";
import ChatGPT from "../assets/chatgpt.svg";
import ReactSVG from "../assets/react.svg";
import remImg from "../assets/remImg.webp";
import remImg2 from "../assets/remImg2.webp";
import { PortfolioImg } from "../sections/PortfolioImg";

export const PortfolioREM = () => {
  return (
    <div className="relative bg-[#FEEAED]">
      <Header />
      <PortfolioTitle
        mockupSrc={remMockup}
        mockupAlt="rem Beauty"
        titlePrimary="rem"
        titleSecondary="BEAUTY"
        aportes={[
          "Desarrollo de app",
          "Implementación del diseño web a una app",
        ]}
        stackIcons={[
          { src: ChatGPT, alt: "ChatGPT" },
          { src: ReactSVG, alt: "React Native" },
        ]}
        creditText="Proyecto realizado crusando Coderhouse en 2024. La identidad pertenece a la marca REM Beauty de Ariana Grande."
      />

      <PortfolioImg
        imgSrc={remImg}
        title="Desarrollo de la App REM Beauty"
        text="Creé esta aplicación en React Native basada en la marca de maquillaje REM Beauty de Ariana Grande, copiando y adaptando fielmente el diseño web al formato móvil. Incluye todo el flujo: catálogo y filtros de productos, carrito de compras, historial de pedidos, perfil de usuario con foto e información personal, y geolocalización para facilitar la experiencia del cliente."
      />
      <PortfolioImg
        imgSrc={remImg2}
        title="Tecnologías y Arquitectura"
        text="La app utiliza Firebase Authentication para la seguridad y RTK Query junto con Firebase para gestionar lecturas y escrituras en la base de datos. La navegación se implementó con React Native Navigation Stack y Bottom Tabs, mientras que Expo-Location y Expo-Image-Picker permiten acceder a la ubicación y cargar imágenes de perfil. Redux centraliza el estado de la aplicación, garantizando un desarrollo escalable y mantenible."
        invert
        buttonTitle="Ver en GitHub"
        onButtonClick={() =>
          window.open(
            "https://github.com/lucilaparodi/rem/tree/main?tab=readme-ov-file",
            "_blank"
          )
        }
      />

      <Footer />
    </div>
  );
};
