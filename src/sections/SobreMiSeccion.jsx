import React, { useRef } from "react";
import { RectangleLine2 } from "../components/RectangleLine2";
import { FlorSVG2 } from "../components/FlorSVG2";
import { FlorSVG3 } from "../components/FlorSVG3";
import { useInView } from "framer-motion";
import SoyLucilaImg from "../assets/soylucila.webp";

const experiences = [
  {
    start: "AGO 2024",
    end: "ACTUALIDAD",
    title: "Desarrollo frontend & Diseño multimedia",
    company: "Novoid",
    type: "Experiencia",
  },
  {
    start: "JUL 2020",
    end: "ACTUALIDAD",
    title: "Diseño multimedia & Marketing",
    company: "Magnos",
    type: "Experiencia",
  },
  {
    start: "JUN 2024",
    end: "SET 2024",
    title: "Desarrollo frontend Shopify",
    company: "Dango Digital",
    type: "Experiencia",
  },
  {
    start: "MAR 2018",
    end: "JUN 2025",
    title: "Licenciatura en Diseño Multimedia",
    company: "Universidad ORT Uruguay",
    type: "Educacion",
  },
  {
    start: "MAR 2019",
    end: "MAR 2021",
    title: "Licenciatura en Sistemas (2 años)",
    company: "Universidad ORT Uruguay",
    type: "Educacion",
  },
  {
    start: "ENE 2024",
    end: "MAR 2024",
    title: "Desarrollo de aplicaciones",
    company: "CODERHOUSE",
    type: "Educacion",
  },
  {
    start: "MAR 2019",
    end: "NOV 2019",
    title: "Analista en marketing digital",
    company: "SENPAI ACADEMY",
    type: "Educacion",
  },
];

const TimelineItem = ({ start, end, title, company }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0px 0px -50% 0px" });

  return (
    <div
      ref={ref}
      className="relative flex gap-6 text-degular-bold text-[#500E14] text-xl flex items-center"
    >
      {inView ? (
        <FlorSVG3 className="absolute -left-6 top-2 z-10" />
      ) : (
        <FlorSVG2 className="absolute -left-6 top-2 z-10" />
      )}
      <div className="flex text-start w-36">
        <p className="leading-6 text-2xl opacity-50">
          {start} - <br />
          {end}
        </p>
      </div>
      <div className="flex-1 text-start">
        <p className="text-2xl text-degular-medium leading-8 mt-[-5px]">
          {title}
        </p>
        <p className="text-xl text-degular-medium leading-4 opacity-50">
          {company}
        </p>
      </div>
    </div>
  );
};

export const SobreMiSeccion = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 bg-[#FFAB95]">
      <div className="max-w-[1600px] px-32 pt-28 mx-auto text-center">
        {/* Inicio de sección optimizada */}
        <div className="flex items-center gap-24 justify-center pb-32">
          <div className="w-1/2 relative inline-block">
            <RectangleLine2 className="absolute top-0 left-0 -translate-y-4 translate-x-4 z-0" />
            <img
              src={SoyLucilaImg}
              alt="Soy Lucila"
              className="relative -translate-y-2 translate-x-6 z-10 w-full h-auto"
            />
          </div>
          <div className="w-1/2 text-start">
            <h2
              style={{ fontFamily: "Snell Roundhand" }}
              className="text-9xl font-[500] text-[#F9643E] mb-16"
            >
              Soy lucila
            </h2>
            <p className="text-degular-medium text-lg">
              ¡Hola! Soy <strong>Lucila</strong>, tengo 26 años y estudio{" "}
              <strong>Licenciatura en Diseño Multimedia</strong> en la
              Universidad ORT Uruguay. Además del diseño, me apasiona la{" "}
              <strong>música</strong>: soy profesora de canto, compositora y
              cantante. Cada proyecto es una oportunidad para conectar lo humano
              con lo digital, lo emocional con lo interactivo. Me encanta
              experimentar con <strong>estilos</strong>, explorar{" "}
              <strong>nuevas tecnologías</strong> y{" "}
              <strong>reinventarme</strong> en el proceso. Creo en el poder del
              diseño como <strong>experiencia</strong>, en crear algo que{" "}
              <strong>despierte una emoción</strong> o deje una huella. Busco
              que mis creaciones generen una <strong>conexión real</strong> con
              quien las experimenta. <strong>Desafiarme</strong> es parte del
              camino, porque fuera de la zona de confort es donde realmente
              aparecen las ideas más auténticas. Así es como entiendo el diseño:
              como una forma de <strong>expresión y descubrimiento</strong>.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          {/* Experiencia */}
          <div className="w-full max-w-4xl px-4 mx-auto">
            <div className="relative py-4">
              <h3 className="text-7xl font-bold text-degular-bold text-[#500E14] mb-16 leading-16 text-start">
                Experiencia
              </h3>
              <div className="flex flex-col gap-16">
                {experiences
                  .filter((item) => item.type === "Experiencia")
                  .map((item) => (
                    <TimelineItem
                      key={`${item.start}-${item.company}`}
                      {...item}
                    />
                  ))}
              </div>
            </div>

            {/* Educación */}
            <div className="relative py-24">
              <h3 className="text-7xl font-bold text-degular-bold text-[#500E14] mb-16 leading-16 text-start">
                Educación
              </h3>
              <div className="flex flex-col gap-16">
                {experiences
                  .filter((item) => item.type === "Educacion")
                  .map((item) => (
                    <TimelineItem
                      key={`${item.start}-${item.company}`}
                      {...item}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
