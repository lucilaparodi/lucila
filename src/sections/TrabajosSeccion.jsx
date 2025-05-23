import React from "react";
// import p5 from "p5";
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
      <div className="absolute inset-0 z-0 bg-[#FEEAED]" />

      <motion.section
        className="relative z-10 max-w-[1600px] px-32 py-28 mx-auto text-center"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative inline-block mb-16">
          <h3
            style={{ fontFamily: "Snell Roundhand" }}
            className="text-7xl text-[#FDAFB4] absolute bottom-10 left-0 right-0 flex items-center justify-center z-20"
          >
            Trabajos
          </h3>
          <h3 className="text-degular-bold text-7xl font-bold text-[#F9643E] relative">
            Trabajos
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-8 items-stretch">
          <div className="flex flex-col items-center justify-between h-full">
            <Link
              to="/novoid"
              className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={novoidImg}
                alt="Novoid"
                className="w-full h-150 object-cover"
              />
            </Link>
          </div>

          <div className="flex flex-col items-center justify-between h-full space-y-8">
            <Link
              to="/vibrato"
              className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={vibrato1Img}
                alt="Vibrato"
                className="w-full h-71 object-cover"
              />
            </Link>
            <Link
              to="/vibrato"
              className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={vibratoImg}
                alt="Vibrato"
                className="w-full h-71 object-cover"
              />
            </Link>
          </div>

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

        <div className="mt-10">
          <Button title="Ver todos" to="/trabajos" />
        </div>
      </motion.section>
    </section>
  );
};
