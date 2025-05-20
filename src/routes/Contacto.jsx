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
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
