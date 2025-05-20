import React from "react";
import { Banner } from "../sections/Banner";
import { Header } from "../sections/Header";
import { motion } from "framer-motion";
import SobreMiBgTop from "../assets/sobremi-bg-top.webp";
import SobreMiBgBottom from "../assets/sobremi-bg-bottom.webp";
import { Footer } from "../sections/Footer";

export const SobreMi = () => {
  return (
    <motion.section
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0, ease: "easeOut" }}
    >
      <Header />

      <Banner
        bottomBg={SobreMiBgBottom}
        topBg={SobreMiBgTop}
        titleScript="Sobre mi"
        titleMain="LUCILA"
        showButton={false}
        buttonTitle="Conectar"
      />

      <Footer />
    </motion.section>
  );
};
