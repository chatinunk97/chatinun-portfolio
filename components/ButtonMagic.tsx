"use client";
import React from "react";

const ButtonMagic = ({
  title,
  icon,
  position,
  // handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  // handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffcbcb_0%,#e30000_50%,#ffcbcb_100%)]" />
      <span
        className={`inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-7 font-medium text-white backdrop-blur-3xl ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default ButtonMagic;
