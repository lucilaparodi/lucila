import React from "react";
import { Banner } from "../sections/Banner";
import { Header } from "../sections/Header";
import SobreMiBgTop from "../assets/sobremi-bg-top.webp";
import SobreMiBgBottom from "../assets/sobremi-bg-bottom.webp";
import { Footer } from "../sections/Footer";
import { SobreMiSeccion } from "../sections/SobreMiSeccion";

export const SobreMi = () => {
  return (
    <div className="relative">
      <Header />

      <Banner
        bottomBg={SobreMiBgBottom}
        topBg={SobreMiBgTop}
        titleScript="Sobre mi"
        titleMain="LUCILA"
        showButton={false}
        buttonTitle="Conectar"
      />

      <SobreMiSeccion />
      <Footer />
    </div>
  );
};
