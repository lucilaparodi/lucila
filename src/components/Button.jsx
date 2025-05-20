import React from "react";

export const Button = ({ onClick, title }) => {
  return (
    <button
      onClick={onClick}
      title={title}
      className="
        bg-transparent 
        text-[#500E14]
        py-3 
        px-20 
        rounded-full
        border-2 
        border-[#500E14]
        hover:bg-white/30
        hover:text-[#991311]
        hover:border-[#991311]
        transition 
        duration-300
        cursor-pointer
        text-degular-medium
      "
    >
      {title}
    </button>
  );
};
