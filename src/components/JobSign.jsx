import React, { useEffect, useState } from "react";
import Typing from "./Typing";
import styles from "../style";
const JobSign = () => {
  // Keyframes for gradient animation
  const gradientKeyframes = `
    @keyframes gradientText {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  // Keyframes for subtle bounce
  const bounceKeyframes = `
    @keyframes bounceText {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
    }
  `;

  const [injected, setInjected] = useState(false);
  useEffect(() => {
    if (!injected) {
      const styleSheet = document.createElement("style");
      styleSheet.innerHTML = gradientKeyframes + bounceKeyframes;
      document.head.appendChild(styleSheet);
      setInjected(true);
    }
  }, [injected]);

  return (
    <section id="jobsearch" className={` ${styles.paddingY}`}>
      <div className="flex justify-center items-center mt-8">
        <span
          className="font-bold text-3xl md:text-5xl px-6 py-3 rounded-lg
                   bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500
                   bg-clip-text text-transparent
                   animate-[gradientText_6s_linear_infinite] 
                   animate-[bounceText_2s_ease-in-out_infinite]
                   "
          style={{ backgroundSize: "200% 200%" }}
        >
          Currently looking for job:
          <br />
          <Typing
            texts={[
              "Junior <Game - Unity- VR/AR> Developer>",
              "Junior AI/ML Engineer",
              "Junior C#/Python Developer",
              "Software QA / VR Testing Engineer",
              "Junior Research Assistant in AI/Simulation",
            ]}
            typingSpeed={20}
            deletingSpeed={20}
            pauseBetween={2000}
            loop={true}
            className="text-amber-400"
          />
        </span>
      </div>
    </section>
  );
};

export default JobSign;
