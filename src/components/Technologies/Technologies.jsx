import React from "react";
import { technologies } from "../../constants";
import styles, { layout } from "../../style";
import Typing from "../TypingAnimation/Typing";
import TechnologiesCard from "./TechnologiesCard";

const Technologies = () => {
  return (
    <section
      id="technologies"
      className={`${layout.section} flex flex-col text-center`}
    >
      <div
        className={`${layout.sectionInfo} mb-8 flex flex-col justify-center `}
      >
        <h2 className={styles.heading2}>
          <span>
            <Typing
              texts={["Technologies I Used"]}
              typingSpeed={110}
              deletingSpeed={40}
              pauseBetween={5000}
              loop={true}
              className="break-words"
            />
          </span>
        </h2>
      </div>

      <div className="flex flex-col space-y-8 w-full  text-dim-white">
        {technologies.map((technologyCategory, index) => (
          <TechnologiesCard
            key={technologyCategory.id}
            {...technologyCategory}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
