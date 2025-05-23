import React from "react";
// import p5 from "p5";
import { Button } from "../components/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import novoidImg from "../assets/novoid.webp";
import vibrato1Img from "../assets/vibrato1.webp";
import vibratoImg from "../assets/vibrato.webp";
import bebasImg from "../assets/bebas.webp";
import enviaMiCompraImg from "../assets/enviamicompra.webp";
import remBeautyImg from "../assets/rembeauty.webp";
import videoImg from "../assets/video.webp";
import contenedorImg from "../assets/contenedor.webp";
import lucilaImg from "../assets/lucila.webp";

export const TodosTrabajos = () => {
  return (
    <section className="relative w-full overflow-hidden py-16">
      {/* fondo */}
      <div className="absolute inset-0 z-0 bg-[#FEEAED]" />

      <div className="relative z-10 max-w-[1600px] px-32 py-28 mx-auto text-center">
        {/* Primera fila */}
        <div className="grid grid-cols-3 gap-8 items-stretch">
          {/* Columna 2 */}
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

          {/* Columna 1 */}
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

          {/* Columna 3 */}
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

        {/* Segunda fila */}
        <div className="grid grid-cols-3 gap-8 items-stretch mt-12">
          {/* Primer componente ocupa el doble de ancho */}
          <div className="col-span-2 flex flex-col items-center justify-between h-full space-y-8">
            <Link
              to="/rem"
              className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={remBeautyImg}
                alt="Rem Beauty"
                className="w-full h-71 object-cover"
              />
            </Link>
          </div>

          {/* Segundo componente */}
          <div className="flex flex-col items-center justify-between h-full">
            <Link
              to="/enviamicompra"
              className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={enviaMiCompraImg}
                alt="Envia mi compra"
                className="w-full h-71 object-cover"
              />
            </Link>
          </div>
        </div>

        {/* Tercera fila */}
        <div className="grid grid-cols-3 gap-8 items-stretch mt-12">
          {/* Columna 1 */}
          <div className="flex flex-col items-center justify-between h-full">
            <Link
              to="/contenedor"
              className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={contenedorImg}
                alt="Vibrato"
                className="w-full h-71 object-cover"
              />
            </Link>
          </div>

          {/* Columna 2 */}
          <div className="flex flex-col items-center justify-between h-full">
            <Link
              to="/video"
              className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={videoImg}
                alt="Video"
                className="w-full h-71 object-cover"
              />
            </Link>
          </div>

          {/* Columna 3 */}
          <div className="flex flex-col items-center justify-between h-full">
            <Link
              to="/lucila"
              className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={lucilaImg}
                alt="Lucila"
                className="w-full h-71 object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
