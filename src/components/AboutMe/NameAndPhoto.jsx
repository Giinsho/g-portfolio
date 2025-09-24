import React, { useEffect, useState } from "react";
import styles from "../../style";

const NameAndPhoto = ({ name, image }) => {
  // Classy subtle background glow with matching box-shadow
  const glowKeyframes = `
    @keyframes bg-glow {
      0%, 100% {
        background-color: rgba(255, 255, 255, 0.01);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.02);
      }
      50% {
        background-color: rgba(255, 255, 255, 0.15);
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
      }
    }
  `;

  const [injected, setInjected] = useState(false);
  useEffect(() => {
    if (!injected) {
      const styleSheet = document.createElement("style");
      styleSheet.innerHTML = glowKeyframes;
      document.head.appendChild(styleSheet);
      setInjected(true);
    }
  }, [injected]);

  return (
    <div className="w-full">
      <div className="flex-1 flex sm:flex-row flex-col justify-center items-center relative  mr-5">
        {/* Circular wrapper with subtle animated background and shadow */}
        <div
          className="relative  w-[60%] sm:w-[40%] h-[40%] rounded-full flex items-center justify-center mb-4 sm:mb-0"
          style={{
            animation: "bg-glow 5s ease-in-out infinite",
          }}
        >
          <img
            src={image}
            alt="my-picture"
            className="w-full h-full rounded-full object-cover justify-center items-center"
          />
        </div>

        <h1
          className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white 
    ss:leading-[100px] leading-[75px] text-center sm:text-left"
        >
          <span className="text-gradient block sm:inline">
            {name.split(" ")[0]}
          </span>{" "}
          <span className="text-gradient block sm:inline">
            {name.split(" ").slice(1).join(" ")}
          </span>
        </h1>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </div>
  );
};

export default NameAndPhoto;
