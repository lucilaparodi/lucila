import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import p5 from "p5";
import DisenoIMG from "../assets/disenoimg.webp";
import ConectoIMG from "../assets/conectoimg.webp";
import DesarrolloIMG from "../assets/desarrolloimg.webp";
import WebIMG from "../assets/webimg.webp";
import AppIMG from "../assets/appimg.webp";
import MultimediaIMG from "../assets/multimediaimg.webp";
import SombraIMG from "../assets/sombra.webp";
import { RectangleLine } from "../components/RectangleLine";
import { FlorNaranjaSVG } from "../components/FlorNaranjaSVG";

export const SoyLucila = () => {
  //   const sketchRef = useRef();
  const [hovered, setHovered] = useState("Diseño");
  const [secondHovered, setSecondHovered] = useState("Páginas web");

  //   useEffect(() => {
  //     const sketch = (p) => {
  //       p.setup = () => {
  //         const fullHeight = document.documentElement.scrollHeight;
  //         p.createCanvas(p.windowWidth, fullHeight);
  //         p.noLoop();
  //       };

  //       p.draw = () => {
  //         p.background("#FFC6B7");
  //         p.noStroke();
  //         for (let i = 0; i < 25000; i++) {
  //           p.fill(255, p.random(80, 180));
  //           p.rect(p.random(p.width), p.random(p.height), 1.2, 1.2);
  //         }
  //       };

  //       p.windowResized = () => {
  //         const fullHeight = document.documentElement.scrollHeight;
  //         p.resizeCanvas(p.windowWidth, fullHeight);
  //         p.redraw();
  //       };
  //     };

  //     const canvas = new p5(sketch, sketchRef.current);
  //     return () => canvas.remove();
  //   }, []);

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

  const currentImg = imgMap[hovered] || DisenoIMG;
  const secondImg = secondImgMap[secondHovered] || WebIMG;

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#FFAB95]"></div>

      <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col items-center justify-center text-[#500E14] text-center">
        <motion.section
          className="w-full flex justify-between items-center px-32 pt-36 pb-20"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col items-start">
            <h2
              style={{ fontFamily: "Snell Roundhand" }}
              className="text-9xl font-[500]  text-[#F9643E] mb-16"
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

            <p className="text-degular-medium">
              Creo experiencias digitales donde lo emocional se encuentra con lo
              interactivo.
            </p>
          </div>

          <div className="relative">
            <RectangleLine className="absolute top-0 right-0 -translate-y-4 translate-x-4 z-0" />
            <img src={currentImg} alt={hovered} className="relative z-10" />
          </div>
        </motion.section>

        <div className="w-full flex justify-between items-center px-32 pb-24">
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
    </section>
  );
};
