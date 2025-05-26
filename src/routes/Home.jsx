import React from "react";
import { Banner } from "../sections/Banner";
import { Header } from "../sections/Header";
import { SoyLucila } from "../sections/SoyLucila";
import { motion } from "framer-motion";
import { FlorSVG } from "../components/FlorSVG";
import HomeBgTop from "../assets/home-bg-top.webp";
import HomeBgBottom from "../assets/home-bg-bottom.webp";
import { TrabajosSeccion } from "../sections/TrabajosSeccion";
import { Footer } from "../sections/Footer";

export const Home = () => {
  return (
    <motion.section
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Header />
      <Banner
        bottomBg={HomeBgBottom}
        topBg={HomeBgTop}
        titleScript="Design &"
        titleMain="PROGRAM"
        showButton={true}
        buttonTitle="Conectar"
      />

      <div className="absolute left-1/2 top-[100vh] -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
        <FlorSVG />
      </div>
      <SoyLucila />
      <TrabajosSeccion />
      <Footer />
    </motion.section>
  );
};
