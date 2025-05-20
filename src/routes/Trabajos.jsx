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
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
