import React, { useState } from "react";
import { Button } from "../components/Button";

export const Banner = ({
  bottomBg,
  topBg,
  titleScript,
  titleMain,
  showButton = false,
  buttonTitle = "Conectar",
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <img
        src={bottomBg}
        alt="Background Bottom"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <img
        src={topBg}
        alt="Background Top"
        className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
        style={{
          WebkitMaskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, black 100%)`,
          maskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, black 100%)`,
          transition: "mask-image 0.1s, -webkit-mask-image 0.1s",
        }}
      />

      {/* 
        Agregamos mt-30 (tal como tenías),
        pero en móvil lo reducimos a mt-2 con: "mt-2 md:mt-30"
        para acercar más los textos en pantallas pequeñas.
      */}
      <div className="relative z-20 text-center text-white px-4 mt-2 ">
        {/* 
          Quitamos el mb-2 (solo lo aplicamos en escritorio con md:mb-2)
          para pegar más el primer título al segundo en mobile.
        */}
        <div className="flex items-center justify-center mb-0 md:mb-2">
          <svg
            viewBox="0 0 67 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3 w-8 h-8 md:w-[67px] md:h-[67px]"
          >
            <path
              d="M34.9304 28.6086H35.3559C36.0549 27.0693 36.8958 25.1047 37.8784 22.7147C38.8611 20.3349 40.0565 18.0158 41.4546 15.7778C42.8526 13.5397 44.4026 11.6055 46.0843 9.99529C47.7659 8.38511 49.6604 7.57495 51.7675 7.57495C54.7156 7.57495 56.7113 8.31422 57.7649 9.78263C58.8185 11.251 59.3453 12.9017 59.3453 14.7246C59.3453 16.6892 58.5753 18.4412 57.0355 19.9805C55.4855 21.5299 53.6012 22.9578 51.3522 24.2945C49.1032 25.6313 46.7934 26.8161 44.4127 27.8693C42.0219 28.9225 39.9957 30.0061 38.3141 31.1302L38.7395 31.5555C44.4937 31.5555 49.1234 31.6264 52.6286 31.7682C56.1338 31.91 58.9096 32.2239 60.9358 32.71C62.972 33.2062 64.3397 34.0063 65.0387 35.1304C65.7377 36.2544 66.0923 37.8646 66.0923 39.971C66.0923 42.361 65.2109 44.0724 63.4583 45.1257C61.7057 46.1789 59.8417 46.7055 57.8864 46.7055C56.2048 46.7055 54.4522 46.3206 52.6286 45.551C50.8051 44.7813 49.0525 43.8395 47.3708 42.7154C45.6892 41.5913 44.0379 40.4369 42.4271 39.2419C40.8163 38.0469 39.3778 37.0342 38.1114 36.1937L37.686 36.619C38.5268 38.3001 39.4791 40.0521 40.5225 41.8749C41.5761 43.6978 42.5892 45.5611 43.5719 47.4447C44.5545 49.3385 45.3954 51.3031 46.0944 53.3386C46.7934 55.3741 47.148 57.44 47.148 59.5464C47.148 61.3693 46.378 62.9086 44.8382 64.1744C43.2882 65.4403 41.6774 66.0682 39.9957 66.0682C38.0304 66.0682 36.4905 65.7238 35.366 65.015C34.2415 64.3162 33.4007 63.4048 32.8435 62.2807C32.2863 61.1566 31.9318 59.8603 31.7899 58.3919C31.6481 56.9235 31.5772 55.4146 31.5772 53.8652C31.5772 51.06 31.6785 48.2954 31.8912 45.551C32.104 42.8167 32.3471 40.1128 32.6308 37.4494L32.2053 37.0241C31.2226 38.7052 30.0981 40.7812 28.8419 43.2319C27.5756 45.6826 26.1776 48.103 24.6377 50.4929C23.0877 52.8829 21.406 54.9083 19.5825 56.5893C17.759 58.2704 15.6518 59.111 13.2711 59.111C11.3058 59.111 9.72541 58.4426 8.54012 57.116C7.34471 55.7893 6.747 54.1386 6.747 52.174C6.747 50.2094 7.68915 48.3865 9.58358 46.7055C11.478 45.0244 13.6865 43.4446 16.209 41.9762C18.7315 40.5078 21.2237 39.171 23.6753 37.976C26.1269 36.7811 27.9909 35.7684 29.2471 34.9278L28.8217 34.5025C26.4308 34.786 23.9488 34.9987 21.3554 35.1304C18.7619 35.2721 16.128 35.343 13.4636 35.343C12.1973 35.343 10.7993 35.2418 9.2594 35.0291C7.70941 34.8164 6.24047 34.4316 4.84244 33.8746C3.43429 33.3176 2.27939 32.5075 1.36764 31.4543C0.455879 30.4011 0 29.0339 0 27.3529C0 24.973 0.769928 23.0084 2.30978 21.459C3.84964 19.9197 5.8859 19.15 8.40843 19.15C10.0901 19.15 11.8832 19.6058 13.7777 20.5172C15.6721 21.4286 17.526 22.4514 19.3495 23.5654C21.173 24.6895 22.9965 25.844 24.8201 27.0389C26.6436 28.2339 28.2543 29.1757 29.6625 29.8745L30.088 29.4491C29.2471 28.3251 28.1936 26.7858 26.9272 24.8211C25.6609 22.8565 24.4351 20.7906 23.2397 18.6133C22.0443 16.436 21.0312 14.2992 20.1904 12.1928C19.3495 10.0864 18.924 8.33447 18.924 6.93695C18.924 4.97233 19.694 3.33176 21.2338 1.99501C22.7737 0.668378 24.4554 0 26.289 0C28.6697 0 30.4628 0.62787 31.6582 1.89374C32.8536 3.15961 33.6945 4.6989 34.1808 6.52175C34.667 8.3446 34.9203 10.3092 34.9203 12.4156V28.6086H34.9304Z"
              fill="white"
            />
          </svg>

          {/* 
            Tres tamaños de fuente en total:
            - <768px => text-[80px]
            - >=768px => text-[120px]
            - >=998px => text-[200px]
          */}
          <h1
            style={{ fontFamily: "Snell Roundhand" }}
            className="
              text-[80px]
              md:text-[120px]
              lg:text-[200px]
              text-[#500E14]
              relative
              z-10
            "
          >
            {titleScript}
          </h1>
        </div>

        {/* Segundo título con la misma lógica de tamaños. */}
        <h1
          className="
            text-[80px]
            md:text-[120px]
            lg:text-[200px]
            -mt-16
            md:-mt-26
            lg:-mt-40
            text-degular-black
            relative
            z-0
          "
        >
          {titleMain}
        </h1>

        {showButton && (
          <div className="mt-12 md:mt-0">
            <Button title={buttonTitle} to="/contacto" />
          </div>
        )}
      </div>
    </section>
  );
};
