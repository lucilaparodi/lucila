import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FlorSVG4 } from "../components/FlorSVG4";

import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const items = [
    { to: "/", label: "Home" },
    { to: "/trabajos", label: "Trabajos" },
    { to: "/sobre-mi", label: "Sobre mí" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="w-full absolute top-0 left-0 bg-transparent z-50 border-b-2 border-[#500E14]">
      <div className="max-w-[1600px] mx-auto w-full py-8 md:py-12 px-4 md:px-16">
        {/* === MENU DE ESCRITORIO === */}
        <div className="hidden md:flex items-center justify-center">
          <nav className="w-full flex justify-between text-degular-medium text-xl">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative group text-[#500E14] transition"
              >
                <span className="absolute left-0 -translate-x-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                  &gt;
                </span>
                <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-2">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* === HEADER MOBILE === */}
        <div className="flex md:hidden items-center justify-between">
          <div
            style={{ fontFamily: "Snell Roundhand" }}
            className="text-3xl text-[#500E14]"
          >
            lucila
          </div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="focus:outline-none"
          >
            <img src={menuIcon} alt="menu" className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/*
        MENÚ MÓVIL con 2 capas:
        1) Contenedor relativo que anima translate-y
        2) Capa "fondo" con backdrop-blur
        3) Capa "contenido" por encima (z-10), sin desenfoque
      */}
      <div
        className={`
          md:hidden
          fixed
          top-0
          left-0
          w-full
          h-[50vh]         /* Panel de 90% de la pantalla en alto */
          z-50
          transform
          transition-all
          duration-500
          ease-in-out
          ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
        `}
      >
        {/* CAPA FONDO CON BLUR (No afecta al texto por ir en otra capa) */}
        <div
          className="
          absolute
          inset-0
          bg-white/40
          backdrop-blur-xl
          rounded-b-full
          z-0
        "
        />

        {/* CAPA CONTENIDO (z-10) - el texto no se desenfoca */}
        <div className="relative z-10 w-full h-full overflow-y-auto">
          {/* BOTÓN CERRAR */}
          <div className="flex justify-end p-10">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="focus:outline-none"
            >
              <img src={closeIcon} alt="Close menu" className="w-4 h-4" />
            </button>
          </div>

          {/* ITEMS DEL MENÚ MÓVIL */}
          <ul className="flex flex-col items-center gap-6 mt-6 text-lg pb-20">
            {items.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="relative group text-[#500E14] transition"
                  >
                    <div className="relative inline-flex items-center">
                      {isActive && (
                        <div className="absolute -left-1 flex items-center justify-center">
                          {/* Asegúrate de que FlorSVG2 acepte fill="currentColor" */}
                          <FlorSVG4 className="fill-current text-[#500E14]" />
                        </div>
                      )}
                      <span className="absolute left-0 -translate-x-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                        &gt;
                      </span>
                      <span className="text-xl inline-block transform transition-transform duration-200 group-hover:translate-x-4 pl-6">
                        {item.label}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* OVERLAY OSCURO DETRÁS DEL MENÚ (EN MÓVIL) */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="md:hidden fixed inset-0 bg-black transition-opacity duration-500 ease-in-out opacity-20 z-40"
        />
      )}
    </header>
  );
};
