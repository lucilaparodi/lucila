import React from "react";
import { Link } from "react-router-dom";

// Tus imágenes
import novoidImg from "../assets/novoid.webp";
import vibrato1Img from "../assets/vibrato1.webp";
import vibratoImg from "../assets/vibrato.webp";
import bebasImg from "../assets/bebas.webp";
import remBeautyImg from "../assets/rembeauty.webp";
import enviaMiCompraImg from "../assets/enviamicompra.webp";
import contenedorImg from "../assets/contenedor.webp";
import videoImg from "../assets/video.webp";
import lucilaImg from "../assets/lucila.webp";

export const TodosTrabajos = () => {
  return (
    <div className="relative z-10 max-w-[1600px] px-4 sm:px-8 md:px-16 py-16 sm:py-24 md:py-28 mx-auto text-center">
      {/* =========================================
          MOBILE/TABLET VERSION (< md)
          Aquí hacemos un grid unificado (1 col en mobile, 2 col en sm)
        ========================================= */}
      <div className="block md:hidden">
        <div
          className="
            grid
            grid-cols-1       /* en mobile */
            sm:grid-cols-2    /* desde sm -> 2 columnas */
            gap-6
            sm:gap-8
            items-stretch
          "
        >
          {/* Podrías agrupar las 9 imágenes en un solo grid */}
          {/* 1) Vibrato1 */}
          <div className="flex flex-col items-center">
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
          </div>

          {/* 2) Vibrato2 */}
          <div className="flex flex-col items-center">
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

          {/* 3) Novoid */}
          <div className="flex flex-col items-center">
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

          {/* 4) Bebas */}
          <div className="flex flex-col items-center">
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

          {/* 5) Rem Beauty */}
          <div className="flex flex-col items-center">
            <Link
              to="/rem"
              className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={remBeautyImg}
                alt="Rem Beauty"
                className="w-full h-30 object-cover sm:h-71"
              />
            </Link>
          </div>

          {/* 6) Envia Mi Compra */}
          <div className="flex flex-col items-center">
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

          {/* 7) Contenedor */}
          <div className="flex flex-col items-center">
            <Link
              to="/contenedor"
              className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={contenedorImg}
                alt="Contenedor"
                className="w-full h-71 object-cover"
              />
            </Link>
          </div>

          {/* 8) Video */}
          <div className="flex flex-col items-center">
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

          {/* 9) Lucila */}
          <div className="flex flex-col items-center">
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

      {/* =========================================
          DESKTOP VERSION (>= md)
          Aquí mantenemos tu layout original con 3 filas y 3+3+3 secciones
        ========================================= */}
      <div className="hidden md:block">
        {/*
          PRIMERA FILA: 3 columnas
        */}
        <div className="grid grid-cols-3 gap-8 items-stretch">
          {/* Columna 1: Vibrato1 + Vibrato2 */}
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

          {/* Columna 2: Novoid */}
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

          {/* Columna 3: Bebas */}
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

        {/* Espacio vertical */}
        <div className="mt-12" />

        {/*
          SEGUNDA FILA
        */}
        <div className="grid grid-cols-3 gap-8 items-stretch">
          {/* col-1 y col-2 unidas (remBeauty) */}
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

          {/* col-3: Envia mi compra */}
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

        {/* Espacio vertical */}
        <div className="mt-12" />

        {/*
          TERCERA FILA: 3 columnas
        */}
        <div className="grid grid-cols-3 gap-8 items-stretch">
          {/* Columna 1: Contenedor */}
          <div className="flex flex-col items-center justify-between h-full">
            <Link
              to="/contenedor"
              className="w-full overflow-hidden rounded-2xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={contenedorImg}
                alt="Contenedor"
                className="w-full h-71 object-cover"
              />
            </Link>
          </div>

          {/* Columna 2: Video */}
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

          {/* Columna 3: Lucila */}
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
    </div>
  );
};
