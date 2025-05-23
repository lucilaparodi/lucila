import React from "react";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { PortfolioTitle } from "../sections/PortfolioTitle";
import novoidMockup from "../assets/novoidMockup.webp";
import ChatGPT from "../assets/chatgpt.svg";
import ReactSVG from "../assets/react.svg";
import Shopify from "../assets/shopify.svg";
import NovoidImg from "../assets/novoidImg.webp";
import NovoidImg2 from "../assets/novoidImg2.webp";
import Premier from "../assets/premier.svg";
import Illustrator from "../assets/illustrator.svg";
import Photoshop from "../assets/photoshop.svg";
import After from "../assets/after.svg";
import Figma from "../assets/figma.svg";
import Midjourney from "../assets/midjourney.svg";
import { PortfolioImg } from "../sections/PortfolioImg";

export const PortfolioNovoid = () => {
  return (
    <div className="relative bg-[#FEEAED]">
      <Header />
      <PortfolioTitle
        mockupSrc={novoidMockup}
        mockupAlt="Mi Mockup"
        titlePrimary="Agencia"
        titleSecondary="NOVOID"
        aportes={[
          "Diseño de la identidad visual",
          "Diseño y desarrollo de la web",
          "Diseño de tarjetas personales",
          "Diseño de afiches",
          "Diseño de logos para apps",
          "Desarrollo integral de videos promocionales para las apps",
        ]}
        stackIcons={[
          { src: ChatGPT, alt: "ChatGPT" },
          { src: ReactSVG, alt: "React" },
          { src: Shopify, alt: "Shopify" },
          { src: Premier, alt: "Adobe Premier" },
          { src: Illustrator, alt: "Adobe Illustrator" },
          { src: Photoshop, alt: "Adobe Photoshop" },
          { src: After, alt: "Adobe After Effects" },
          { src: Figma, alt: "Figma" },
          { src: Midjourney, alt: "Midjourney" },
        ]}
        creditText="El logotipo fue diseñado por un tercero y no forma parte de mis aportes directos. Para el desarrollo del sitio web y las aplicaciones, conté con el valioso apoyo del equipo de Novoid, con quienes trabajé de forma colaborativa durante todo el proceso. Proyecto finalizado en 2025"
      />

      <PortfolioImg
        imgSrc={NovoidImg}
        title="Página web y aplicaciones"
        text="Comencé diseñando la web en Figma y, junto a mis compañeros, llevamos ese diseño a desarrollo utilizando Shopify. Fue un gran desafío por la magnitud del sitio y la variedad de funcionalidades que incluye. Además, colaboré en el desarrollo de las aplicaciones construidas en React, aportando tanto en su diseño como en la experiencia visual que las rodea."
        buttonTitle="Ver web"
        onButtonClick={() => window.open("https://novoid.com", "_blank")}
      />
      <PortfolioImg
        imgSrc={NovoidImg2}
        title="Branding y diseño gráfico"
        text="Llevamos la identidad visual al mundo físico diseñando tarjetas personales especiales para un evento, con acabados únicos que destacaran la marca. También desarrollé un folleto informativo pensado específicamente para ese evento, cuidando cada detalle para mantener la coherencia estética y reforzar el reconocimiento de Vibrato."
        invert
      />

      <Footer />
    </div>
  );
};
