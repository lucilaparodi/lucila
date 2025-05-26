import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

import DisenoIMG from "../assets/disenoimg.webp";
import ConectoIMG from "../assets/conectoimg.webp";
import DesarrolloIMG from "../assets/desarrolloimg.webp";
import WebIMG from "../assets/WebIMG.webp";
import AppIMG from "../assets/AppIMG.webp";
import MultimediaIMG from "../assets/MultimediaIMG.webp";
import SombraIMG from "../assets/sombra.webp";
import { FlorNaranjaSVG } from "../components/FlorNaranjaSVG";

export const SoyLucila = () => {
  // -------- ESTADOS (DESKTOP HOVER) --------
  const [hovered, setHovered] = useState("Diseño");
  const [secondHovered, setSecondHovered] = useState("Páginas web");

  // -------- ESTADOS (MOBILE SLIDERS) --------
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  // -------- ARRAYS --------
  const labels = ["Diseño", "Desarrollo", "Conecto"];
  const imgMap = {
    Diseño: DisenoIMG,
    Desarrollo: DesarrolloIMG,
    Conecto: ConectoIMG,
  };

  const secondLabels = ["Páginas web", "Aplicaciones", "Multimedia"];
  const secondImgMap = {
    "Páginas web": WebIMG,
    Aplicaciones: AppIMG,
    Multimedia: MultimediaIMG,
  };

  // Imágenes para Desktop Hover
  const currentImg = imgMap[hovered] || DisenoIMG;
  const secondImg = secondImgMap[secondHovered] || WebIMG;

  // -------- HANDLERS SWIPE (MOBILE) --------
  const handlers1 = useSwipeable({
    onSwipedLeft: () => {
      setCurrentSlide1((prev) => (prev + 1 < labels.length ? prev + 1 : 0));
    },
    onSwipedRight: () => {
      setCurrentSlide1((prev) =>
        prev - 1 >= 0 ? prev - 1 : labels.length - 1
      );
    },
    delta: 40,
  });

  const handlers2 = useSwipeable({
    onSwipedLeft: () => {
      setCurrentSlide2((prev) =>
        prev + 1 < secondLabels.length ? prev + 1 : 0
      );
    },
    onSwipedRight: () => {
      setCurrentSlide2((prev) =>
        prev - 1 >= 0 ? prev - 1 : secondLabels.length - 1
      );
    },
    preventScrollOnSwipe: true,
    delta: 40,
  });

  return (
    <section className="relative w-full overflow-x-hidden">
      {/* Fondo general */}
      <div className="absolute inset-0 z-0 bg-[#FFAB95]" />

      {/* =================== DESKTOP (lg) =================== */}
      {/* Se muestra en lg o pantallas mayores */}
      <div className="hidden lg:block relative z-10">
        <div className="max-w-[1600px] mx-auto flex flex-col items-center justify-center text-[#500E14] text-center">
          <motion.section
            className="w-full flex justify-between items-center px-16 pt-36 pb-20"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-col items-start">
              <h2
                style={{ fontFamily: "Snell Roundhand" }}
                className="text-9xl md:text-start font-[500] text-[#F9643E] mb-16"
              >
                Soy lucila
              </h2>

              <div className="text-7xl font-bold text-degular-bold text-[#500E14] flex flex-col items-start mb-16 leading-16">
                {labels.map((label) => {
                  const isActive = hovered === label;
                  return (
                    <div
                      key={label}
                      className="relative mb-4 overflow-visible flex items-center"
                      onMouseEnter={() => setHovered(label)}
                      onMouseLeave={() => setHovered("Diseño")}
                    >
                      <span
                        className={`absolute left-0 -translate-x-1 transition-opacity duration-200 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <FlorNaranjaSVG />
                      </span>
                      <span
                        className={`inline-block transform transition-transform duration-200 ${
                          isActive ? "translate-x-12" : ""
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="md:text-start text-degular-medium">
                Creo experiencias digitales donde lo emocional se encuentra con
                lo interactivo.
              </p>
            </div>

            <div className="relative">
              {/* RectangleLine en Desktop */}

              <img src={currentImg} alt={hovered} className="relative z-10" />
            </div>
          </motion.section>

          <div className="w-full flex justify-between items-center px-16 pb-24">
            <div className="relative inline-block">
              <motion.img
                src={secondImg}
                alt={secondHovered}
                className="relative z-10 w-110"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse",
                }}
              />
              <img
                src={SombraIMG}
                alt="Sombra"
                className="absolute top-85 right-10 mt-4 w-300"
              />
            </div>

            <div className="flex flex-col items-start mr-24">
              <div className="text-7xl text-degular-bold font-bold text-[#500E14] flex flex-col items-start mb-16 leading-16">
                {secondLabels.map((label) => {
                  const isActive = secondHovered === label;
                  return (
                    <div
                      key={label}
                      className="relative mb-4 overflow-visible flex items-center"
                      onMouseEnter={() => setSecondHovered(label)}
                      onMouseLeave={() => setSecondHovered("Páginas web")}
                    >
                      <span
                        className={`absolute left-0 -translate-x-1 transition-opacity duration-200 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <FlorNaranjaSVG />
                      </span>
                      <span
                        className={`inline-block transform transition-transform duration-200 ${
                          isActive ? "translate-x-12" : ""
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== TABLET (md a lg-1px) =================== */}
      {/* Aquí NO hay carrusel, todo se apila, uno debajo del otro */}
      <div className="hidden md:block md:pb-40 lg:pb-16 lg:hidden relative z-10 pt-40 px-8 text-[#500E14]">
        <h2
          style={{ fontFamily: "Snell Roundhand" }}
          className="text-9xl font-[500] text-[#F9643E] text-center my-20"
        >
          Soy lucila
        </h2>

        {/* Bloque 1: Labels + Imagen */}
        <div className="flex flex-col items-center my-30">
          <div className="text-5xl font-bold text-degular-bold text-[#500E14] flex flex-col items-center mb-10 leading-tight">
            {labels.map((label) => (
              <div key={label} className="mb-4">
                {label}
              </div>
            ))}
          </div>

          <div className="relative w-full max-w-xl mx-auto">
            {/* RectangleLine en Tablet (ajustado al contenedor) */}

            <img src={currentImg} alt="currentImg" className="relative z-10" />
          </div>
        </div>

        <p className="text-degular-medium text-center mb-16 px-4">
          Creo experiencias digitales donde lo emocional se encuentra con lo
          interactivo.
        </p>

        {/* Bloque 2: secondLabels + Imagen */}
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold text-degular-bold text-[#500E14] flex flex-col items-center mb-10 leading-tight">
            {secondLabels.map((label) => (
              <div key={label} className="mb-4">
                {label}
              </div>
            ))}
          </div>

          {/* Imagen flotante con sombra */}
          <div className="relative w-140 max-w-xl mx-auto">
            <motion.img
              src={secondImg}
              alt="secondImg"
              className="w-full relative z-10"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse",
              }}
            />
            <img
              src={SombraIMG}
              alt="Sombra"
              className="absolute top-[68%] left-60 -translate-x-1/2 w-[90%]"
            />
          </div>
        </div>
      </div>

      {/* =================== MOBILE (menor a md) =================== */}
      <div className="block md:hidden relative z-10 pt-40 pb-16 px-4 text-[#500E14]">
        <h2
          style={{ fontFamily: "Snell Roundhand" }}
          className="text-7xl font-[500] text-[#F9643E] text-center mb-16"
        >
          Soy lucila
        </h2>

        {/* ------ PRIMER SLIDER (labels) ------ */}
        <div className="w-full overflow-hidden">
          <div
            {...handlers1}
            className="flex transition-transform duration-300 [touch-action:pan-y]"
            style={{
              transform: `translateX(-${currentSlide1 * 100}%)`,
            }}
          >
            {labels.map((label) => (
              <div
                key={label}
                className="w-full flex-shrink-0 flex flex-col items-center justify-center"
              >
                <img
                  src={imgMap[label]}
                  alt={label}
                  className="mb-4 mx-auto w-90 h-auto"
                />
                <p className="text-3xl font-bold">{label}</p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4">
            {labels.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide1(index)}
                className={`mx-1 rounded-full w-2 h-2 ${
                  index === currentSlide1
                    ? "bg-[#F9643E]" // activo
                    : "bg-[#FEEAED]" // inactivo
                }`}
              />
            ))}
          </div>
        </div>

        {/* Texto debajo del primer slider */}
        <p className="my-16 text-degular-medium text-center px-4">
          Creo experiencias digitales donde lo emocional se encuentra con lo
          interactivo.
        </p>

        {/* ------ SEGUNDO SLIDER (secondLabels) ------ */}
        <div className="w-full mt-10">
          <div
            {...handlers2}
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentSlide2 * 100}%)`,
            }}
          >
            {secondLabels.map((label) => (
              <div
                key={label}
                className="w-full flex-shrink-0 flex flex-col items-center justify-center"
              >
                <div className="relative w-full flex justify-center">
                  <motion.img
                    src={secondImgMap[label]}
                    alt={label}
                    className="w-90 h-auto relative z-10"
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatType: "reverse",
                    }}
                  />
                  <img
                    src={SombraIMG}
                    alt="sombra"
                    className="absolute top-70 w-100"
                  />
                </div>
                <p className="text-3xl font-bold mt-6 text-center">{label}</p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4">
            {secondLabels.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide2(index)}
                className={`mx-1 rounded-full w-2 h-2 ${
                  index === currentSlide2 ? "bg-[#F9643E]" : "bg-[#FEEAED]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
