import React, { useEffect, useRef } from "react";
// import p5 from "p5";
import { Button } from "../components/Button";
import { motion } from "framer-motion";

export const TrabajosSeccion = () => {
  //   const sketchRef = useRef();

  //   useEffect(() => {
  //     const sketch = (p) => {
  //       p.setup = () => {
  //         const fullHeight = document.documentElement.scrollHeight;
  //         p.createCanvas(p.windowWidth, fullHeight);
  //         p.noLoop();
  //       };
  //       p.draw = () => {
  //         p.background("#FEEAED");
  //         p.noStroke();
  //         for (let i = 0; i < 25000; i++) {
  //           const c = p.color("#FDAFB4");
  //           c.setAlpha(p.random(80, 180));
  //           p.fill(c);
  //           p.rect(p.random(p.width), p.random(p.height), 1.2, 1.2);
  //         }
  //       };
  //       p.windowResized = () => {
  //         const fullHeight = document.documentElement.scrollHeight;
  //         p.resizeCanvas(p.windowWidth, fullHeight);
  //         p.redraw();
  //       };
  //     };

  //     const canvas = new p5(sketch, sketchRef.current);
  //     return () => canvas.remove();
  //   }, []);

  return (
    <section className="relative w-full overflow-hidden py-16">
      {/* fondo p5 */}
      <div className="absolute inset-0 z-0 bg-[#FEEAED]"></div>

      {/* contenido */}
      <motion.section
        className="relative z-10 max-w-[1600px] px-32 py-28 mx-auto text-center"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Títulos superpuestos (mantén tu código existente) */}
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

        {/* Grilla con columnas igualadas en altura */}
        <div className="grid grid-cols-3 gap-8 items-stretch">
          {/* Columna 1 */}
          <div className="flex flex-col items-center justify-between h-full">
            <div className="w-full">
              <div className="h-120 bg-gray-300 rounded-2xl"></div>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="flex flex-col items-center justify-between h-full">
            <div className="w-full space-y-8">
              <div className="h-56 bg-gray-300 rounded-2xl"></div>
              <div className="h-56 bg-gray-300 rounded-2xl"></div>
            </div>
          </div>

          {/* Columna 3 */}
          <div className="flex flex-col items-center justify-between h-full">
            <div className="w-full">
              <div className="h-120 bg-gray-300 rounded-2xl"></div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button title="Ver todos" />
        </div>
      </motion.section>
    </section>
  );
};
