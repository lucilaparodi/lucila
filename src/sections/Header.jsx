import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = [
    { to: "/", label: "Home" },
    { to: "/trabajos", label: "Trabajos" },
    { to: "/sobre-mi", label: "Sobre mí" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="w-full absolute top-0 left-0 bg-transparent z-50 border-b-2 border-[#500E14]">
      <div className="max-w-[1600px] mx-auto flex items-center justify-center py-12 px-32">
        {/* Desktop Menu */}
        <nav className="hidden md:flex w-full justify-between text-degular-medium text-xl">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative group text-[#500E14] transition"
            >
              {/* '>' indicator */}
              <span className="absolute left-0 -translate-x-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                &gt;
              </span>
              {/* Text starts flush, moves right on hover */}
              <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-2">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden absolute right-6 top-6 focus:outline-none"
        >
          <img src={menuIcon} alt="menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white/90 backdrop-blur-sm transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <img src={closeIcon} alt="Close menu" className="w-6 h-6" />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-6 mt-10 text-lg">
          {items.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className="relative group text-[#500E14] transition"
              >
                <span className="absolute left-0 -translate-x-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                  &gt;
                </span>
                <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-4">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </header>
  );
};
