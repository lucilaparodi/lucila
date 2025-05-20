import React from "react";
import { Banner } from "../sections/Banner";
import { Header } from "../sections/Header";
import { motion } from "framer-motion";
import TrabajosBgTop from "../assets/trabajos-bg-top.webp";
import TrabajosBgBottom from "../assets/trabajos-bg-bottom.webp";
import { Footer } from "../sections/Footer";

export const Trabajos = () => {
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
        bottomBg={TrabajosBgBottom}
        topBg={TrabajosBgTop}
        titleScript="Trabajos"
        titleMain="LUCILA"
        showButton={false}
        buttonTitle="Conectar"
      />

      <Footer />
    </motion.section>
  );
};
