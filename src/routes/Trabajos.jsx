import React from "react";
import { Banner } from "../sections/Banner";
import { Header } from "../sections/Header";
import { motion } from "framer-motion";
import TrabajosBgTop from "../assets/trabajos-bg-top.webp";
import TrabajosBgBottom from "../assets/trabajos-bg-bottom.webp";
import { Footer } from "../sections/Footer";
import { TodosTrabajos } from "../sections/TodosTrabajos";

export const Trabajos = () => {
  return (
    <div className="relative">
      <Header />

      <Banner
        bottomBg={TrabajosBgBottom}
        topBg={TrabajosBgTop}
        titleScript="Trabajos"
        titleMain="LUCILA"
        showButton={false}
        buttonTitle="Conectar"
      />
      <TodosTrabajos />
      <Footer />
    </div>
  );
};
