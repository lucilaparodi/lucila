import React from "react";
import { Button } from "../components/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import novoidImg from "../assets/novoid.webp";
import vibrato1Img from "../assets/vibrato1.webp";
import vibratoImg from "../assets/vibrato.webp";
import bebasImg from "../assets/bebas.webp";

export const TrabajosSeccion = () => {
  return (
    <section className="relative w-full overflow-hidden py-16">
      {/* Fondo */}
      <div className="absolute inset-0 z-0 bg-[#FEEAED]" />

      <motion.div
        className="relative z-10 max-w-[1600px] mx-auto text-center px-4 sm:px-8 md:px-12 lg:px-32 py-8 md:py-16 lg:py-28"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Título */}
        <div className="relative inline-block mb-16">
          <h3
            style={{ fontFamily: "Snell Roundhand" }}
            className="text-7xl text-[#FDAFB4] absolute bottom-4 left-0 right-0 flex items-center justify-center z-20"
          >
            Trabajos
          </h3>
          <h3 className="text-degular-bold font-bold text-[#F9643E] text-7xl relative">
            Trabajos
          </h3>
        </div>

        {/* ========================= MOBILE/TABLET (< lg) ========================= */}
        <div className="block lg:hidden">
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-8
              items-stretch
            "
          >
            {/* Item 1: Novoid */}
            <Link
              to="/novoid"
              className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={novoidImg}
                alt="Novoid"
                // Estilos de mobile que usabas:
                //   en mobile => h-180
                //   en md => h-120
                className="w-full h-180 md:h-120 object-cover"
              />
            </Link>

            {/* Item 2: Vibrato 1 */}
            <Link
              to="/vibrato"
              className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={vibrato1Img}
                alt="Vibrato"
                // en mobile => h-60
                // en md => h-120
                className="w-full h-60 md:h-120 object-cover"
              />
            </Link>

            {/* Item 3: Vibrato 2 */}
            <Link
              to="/vibrato"
              className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={vibratoImg}
                alt="Vibrato"
                // en mobile => h-120
                // en md => h-120
                className="w-full h-90 md:h-120 object-cover"
              />
            </Link>

            {/* Item 4: Bebas */}
            <Link
              to="/bebas"
              className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={bebasImg}
                alt="Bebas"
                // en mobile => h-120
                // en md => h-120
                className="w-full h-120 md:h-120 object-cover"
              />
            </Link>
          </div>
        </div>

        {/* ========================= DESKTOP (>= lg) ========================= */}
        <div className="hidden lg:block">
          <div
            className="
              grid
              grid-cols-3
              gap-8
              items-stretch
            "
          >
            {/* Columna 1: Novoid (alto) */}
            <div className="flex flex-col items-center justify-between h-full">
              <Link
                to="/novoid"
                className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
              >
                <img
                  src={novoidImg}
                  alt="Novoid"
                  // Mantener la altura original en desktop
                  className="w-full h-150 object-cover"
                />
              </Link>
            </div>

            {/* Columna 2: Vibrato (2 imágenes apiladas) */}
            <div className="flex flex-col items-center justify-between h-full space-y-8">
              <Link
                to="/vibrato"
                className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
              >
                <img
                  src={vibrato1Img}
                  alt="Vibrato1"
                  className="w-full h-71 object-cover"
                />
              </Link>
              <Link
                to="/vibrato"
                className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
              >
                <img
                  src={vibratoImg}
                  alt="Vibrato2"
                  className="w-full h-71 object-cover"
                />
              </Link>
            </div>

            {/* Columna 3: Bebas (alto) */}
            <div className="flex flex-col items-center justify-between h-full">
              <Link
                to="/bebas"
                className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
              >
                <img
                  src={bebasImg}
                  alt="Bebas"
                  className="w-full h-150 object-cover"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Botón */}
        <div className="mt-10">
          <Button title="Ver todos" to="/trabajos" />
        </div>
      </motion.div>
    </section>
  );
};
