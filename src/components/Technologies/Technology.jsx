import React from "react";
import { iconMap } from "../../constants";
import { SiReact } from "react-icons/si";
import { small } from "framer-motion/client";

const Technology = ({ title, index }) => {

  const IconComponent =
    iconMap[title.toLowerCase()] || iconMap[title] || SiReact; // fallback to React icon

  return (
    <div className="flex flex-col items-center bg-discount-gradient rounded-[20px] sm:p-4 p-4 sm:w-[120px] w-[90px] sm:h-[170px] h-[140px] shadow-md hover:scale-105 transition-transform">
      <div className="sm:w-[32px] w-[32px] sm:h-[32px] h-[32px] mb-4 flex justify-center items-center bg-primary rounded-full text-white sm:text-[12px] text-[20px]">
        <IconComponent className="sm:w-[32px] w-[42px] sm:h-[32px] h-[42px]" />
      </div>
      <span className="font-poppins text-white font-semibold sm:text-[16px] text-[12px] sm:leading-[14px] leading-[18px] text-center">
        {title.toUpperCase()}
      </span>
    </div>
  );
};

export default Technology;
