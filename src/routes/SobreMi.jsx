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
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
