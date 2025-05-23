import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Button = ({ onClick, title, to }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (to) {
      navigate(to);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
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
        text-xl
      "
    >
      {title}
    </button>
  );
};
