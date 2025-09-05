import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
import CV_pl from "../assets/CV-version-pl.pdf";
import CV_en from "../assets/CV-version-en.pdf";
import { motion } from "framer-motion";

const DownloadCV = () => {
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
    <motion.button
      type="button"
      whileTap={{ scale: 0.9 }} // Animates on tap (mobile)
      whileHover={{ scale: 1.05 }} // Animates on hover (desktop)
      onClick={handleDownload}
      className="m-5 w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer"
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full focus:outline-none`}
      >
        <div className={`${styles.flexStart} flex-row`}>
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
  );
};

export default DownloadCV;
