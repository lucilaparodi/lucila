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
      <div className="max-w-[1600px] px-32 pb-12 mx-auto">
        <div
          className={`flex items-center ${
            invert ? "flex-row-reverse" : "flex-row"
          } gap-36`}
        >
          {/* Imagen */}
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-1/2 rounded-2xl object-cover"
          />

          {/* Texto */}
          <div className={`w-1/2 ${invert ? "text-right" : "text-left"}`}>
            <h3 className="text-5xl text-degular-bold font-bold text-[#500E14]">
              {title}
            </h3>
            <p className="text-sm mt-4 text-gray-700">{text}</p>
            {buttonTitle && onButtonClick && (
              <div className={`mt-6 ${invert ? "flex justify-end" : ""}`}>
                <Button title={buttonTitle} onClick={onButtonClick} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
