import React from "react";
import { motion } from "framer-motion";
import { FlorNaranjaSVG } from "../components/FlorNaranjaSVG";

export const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <motion.div
      className=""
      style={{
        transformOrigin: "center center",
        transformBox: "fill-box",
      }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
    >
      <FlorNaranjaSVG className="w-full h-full" />
    </motion.div>
  </div>
);

export default Loader;
