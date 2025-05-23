import React from "react";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { PortfolioTitle } from "../sections/PortfolioTitle";
import contenedorMockup from "../assets/contenedorMockup.webp";
import ChatGPT from "../assets/chatgpt.svg";
import ReactSVG from "../assets/react.svg";
import Arduino from "../assets/arduino.svg";
import Premier from "../assets/premier.svg";
import ContenedorImg from "../assets/contenedorImg.webp";
import ContenedorImg2 from "../assets/contenedorImg2.webp";
import Vite from "../assets/vite.svg";
import { PortfolioImg } from "../sections/PortfolioImg";

export const PortfolioContenedor = () => {
  return (
    <div className="relative bg-[#FEEAED]">
      <Header />
      <PortfolioTitle
        mockupSrc={contenedorMockup}
        mockupAlt="Contenedor App"
        titlePrimary="Contenedor"
        titleSecondary="INTELIGENTE"
        aportes={[
          "Idea y concepto de proyecto",
          "Diseño y desarrollo de aplicación",
          "Programación de Arduino",
          "Cableado electrónico y soldadura",
          "Creación de maqueta funcional",
        ]}
        stackIcons={[
          { src: ChatGPT, alt: "ChatGPT" },
          { src: ReactSVG, alt: "React" },
          { src: Arduino, alt: "Arduino" },
          { src: Vite, alt: "Vite" },
          { src: Premier, alt: "Premier" },
        ]}
        creditText="Proyecto en conjunto con Ximena Tejería para Diseño Multimedia 1 En 2023."
      />

      <PortfolioImg
        imgSrc={ContenedorImg}
        title="Tecnología al servicio de una ciudad más limpia"
        text="Desarrollamos una solución innovadora que optimiza la gestión de residuos en Montevideo. A través de sensores y una app conectada a Firebase, el contenedor transmite información clave como temperatura, sonido y nivel de llenado, ayudando a prevenir incendios, reducir desbordes y mejorar la eficiencia del trabajo de los recolectores."
        buttonTitle="Ver video"
        onButtonClick={() =>
          window.open(
            "https://drive.google.com/file/d/1aNmOWmh0h2GgZa9dCi4wqpRhA6gflIEu/view?usp=sharing",
            "_blank"
          )
        }
      />
      <PortfolioImg
        imgSrc={ContenedorImg2}
        title="Gestión eficiente de residuos con IoT"
        text="Este proyecto integra tecnología IoT mediante el uso del ESP8266 y diversos sensores para monitorear el estado de los contenedores en tiempo real. La aplicación permite a ciudadanos y recolectores interactuar con el sistema, mejorando el mantenimiento, la recolección y la sostenibilidad urbana."
        invert
      />

      <Footer />
    </div>
  );
};
