import React from "react";
import Technology from "./Technology";

const TechnologyCategory = ({ title, content, index }) => {
  return (
    <div className="flex flex-col w-full p-6 rounded-[20px] ">
      <span className="font-poppins text-white font-semibold text-[24px] leading-[40px] mb-4 text-center">
        {title}
      </span>

      {/* Technologies in columns */}
      <div className="flex flex-wrap justify-center gap-6">
        {content.map((technology, idx) => (
          <Technology key={technology.id} {...technology} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default TechnologyCategory;
