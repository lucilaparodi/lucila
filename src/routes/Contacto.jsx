import React from "react";
import { Banner } from "../sections/Banner";
import { Header } from "../sections/Header";
import { motion } from "framer-motion";
import ContactoBgTop from "../assets/contacto-bg-top.webp";
import ContactoBgBottom from "../assets/contacto-bg-bottom.webp";
import { Footer } from "../sections/Footer";

export const Contacto = () => {
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
        bottomBg={ContactoBgBottom}
        topBg={ContactoBgTop}
        titleScript="Contacto"
        titleMain="LUCILA"
        showButton={false}
        buttonTitle="Conectar"
      />

      <Footer />
    </motion.section>
  );
};
