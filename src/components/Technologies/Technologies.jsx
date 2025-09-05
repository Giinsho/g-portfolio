import React from "react";
import { technologies } from "../../constants";
import styles, { layout } from "../../style";

import TechnologiesCard from "./TechnologiesCard";

const Technologies = () => {
  return (
    <section id="technologies" className={`${layout.section} flex flex-col`}>
      <div className={`${layout.sectionInfo} mb-8`}>
        <h2 className={styles.heading2}>Technologies I used</h2>
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

