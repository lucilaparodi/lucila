import React from "react";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { PortfolioTitle } from "../sections/PortfolioTitle";
import videoMockup from "../assets/videoMockup.webp";
import Premier from "../assets/premier.svg";
import VideoImg from "../assets/videoImg.webp";
import VideoImg2 from "../assets/videoImg2.webp";
import Photoshop from "../assets/photoshop.svg";
import { PortfolioImg } from "../sections/PortfolioImg";

export const PortfolioVideo = () => {
  return (
    <div className="relative bg-[#FEEAED]">
      <Header />
      <PortfolioTitle
        mockupSrc={videoMockup}
        mockupAlt="Contenido Multimedia"
        titlePrimary="Contenido"
        titleSecondary="Multimedia"
        aportes={["Dirección creativa de los videos", "Filmación", "Edición"]}
        stackIcons={[
          { src: Premier, alt: "Adobe Premier" },
          { src: Photoshop, alt: "Adobe Photoshop" },
        ]}
        creditText="Realicé videos para mi canal de YouTube donde muestro mi lado musical, junto a Carola Croce en filmación y vestuario."
      />

      <PortfolioImg
        imgSrc={VideoImg}
        title="Creación de Videos Musicales"
        text="Produzco covers y canciones propias para mi canal de YouTube, encargándome de todo el proceso: desde la elección de la pieza hasta la grabación y edición final. Cada video refleja mi estilo y pasión musical, garantizando calidad de audio e imagen."
        buttonTitle="Ver canal de YouTube"
        onButtonClick={() =>
          window.open("https://www.youtube.com/@lucilaparodi/", "_blank")
        }
      />
      <PortfolioImg
        imgSrc={VideoImg2}
        title="Dirección Creativa y Estilismo"
        text="Diseño la ambientación y selecciono locaciones que realzan la atmósfera de la canción, al mismo tiempo que defino una estética de outfits coherente con el concepto. De esta manera, cada entrega combina música, espacio y vestuario en una propuesta visual única."
        invert
      />

      <Footer />
    </div>
  );
};
