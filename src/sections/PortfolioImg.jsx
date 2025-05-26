import React from "react";
import { Button } from "../components/Button";

/**
 * PortfolioImg
 * @param {object} props
 * @param {string} props.imgSrc — URL de la imagen
 * @param {string} props.imgAlt — Texto alternativo de la imagen
 * @param {string} props.title — Título (h3)
 * @param {string} props.text — Párrafo descriptivo
 * @param {boolean} [props.invert=false] — Si es true, invierte posición de img y texto
 */
export const PortfolioImg = ({
  imgSrc,
  imgAlt = "Imagen",
  title,
  text,
  invert = false,
  buttonTitle,
  onButtonClick,
}) => {
  return (
    <section className="relative w-full overflow-hidden py-16">
      <div className="max-w-[1600px] px-4 sm:px-8 md:px-12 lg:px-16 pb-12 mx-auto">
        <div
          className={`flex flex-col ${
            invert ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-12 lg:gap-36 items-center`}
        >
          {/* Imagen */}
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full lg:w-1/2 rounded-2xl object-cover"
          />

          {/* Texto */}
          <div
            className={`w-full lg:w-1/2 ${
              invert ? "text-right lg:text-right" : "text-left"
            }`}
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl text-degular-bold font-bold text-[#500E14]">
              {title}
            </h3>
            <p className="text-base sm:text-sm mt-4 text-gray-700">{text}</p>
            {buttonTitle && onButtonClick && (
              <div
                className={`mt-6 ${
                  invert ? "flex justify-end" : "flex justify-start"
                }`}
              >
                <Button title={buttonTitle} onClick={onButtonClick} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
