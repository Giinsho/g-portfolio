import { React, useState, useEffect } from "react";
import styles from "../../style";
import { arrowUp } from "../../assets";
import CV_pl from "../../assets/CV-version-pl.pdf";
import CV_en from "../../assets/CV-version-en.pdf";
import { motion } from "framer-motion";

const DownloadCV = () => {
  // Gradient animation keyframes
  const gradientKeyframes = `
    @keyframes gradientMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  const [injected, setInjected] = useState(false);
  useEffect(() => {
    if (!injected) {
      const styleSheet = document.createElement("style");
      styleSheet.innerHTML = gradientKeyframes;
      document.head.appendChild(styleSheet);
      setInjected(true);
    }
  }, [injected]);

  const handleDownload = () => {
    const files = [
      { url: CV_pl, name: "Lukasz_Graczyk_CV_pl.pdf" },
      { url: CV_en, name: "Lukasz_Graczyk_CV_en.pdf" },
    ];

    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file.url;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div className="flex justify-center algin-center">
      <motion.button
        type="button"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        onClick={handleDownload}
        className="m-5 w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer relative overflow-visible"
        style={{
          background:
            "linear-gradient(270deg, #00c6ff, #0072ff, #6a11cb, #2575fc)",
          backgroundSize: "100% 100%",
          animation: "gradientMove 8s ease infinite",
        }}
      >
        {/* spinning border - must not block clicks */}
        <div
          className="absolute inset-0 rounded-full animate-spin pointer-events-none"
          style={{
            background:
              "linear-gradient(270deg, #00c6ff, #0072ff, #6a11cb, #2575fc)",
            zIndex: 0,
          }}
        ></div>

        {/* clickable inner content */}
        <div className="relative  flex flex-col items-center justify-center bg-primary w-full h-full rounded-full">
          <div className="flex flex-row items-center">
            <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
              <span className="text-gradient">Download</span>
            </p>
            <img
              src={arrowUp}
              alt="arrow-up"
              className="w-[23px] h-[23px] object-contain"
            />
          </div>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">CV</span>
          </p>
        </div>
      </motion.button>
    </div>
  );
};

export default DownloadCV;
