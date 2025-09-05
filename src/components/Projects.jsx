import React from "react";
import { iconMap } from "../constants";

const Projects = ({ content, name, date, link }) => {
  // Find the matching icon based on project name (default to GitHub icon)
  const IconComponent = iconMap[name.toLowerCase()] || iconMap["github"];

  return (
    <div className="bg-discount-gradient p-2 rounded-lg shadow-lg m-3 w-[250px] flex flex-col items-center text-center">
      {/* Technology Icon */}
      <div className="w-[48px] h-[48px] bg-primary rounded-full flex justify-center items-center mb-4">
        <IconComponent className="text-white w-[32px] h-[32px]" />
      </div>

      {/* Project Info */}
      <h3 className="text-white font-semibold text-[20px]">{name}</h3>
      <p className="text-dimWhite text-[14px] mt-2">{content}</p>
      <p className="text-gray-400 text-[12px] mt-2">Created: {date}</p>

      {/* GitHub Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-400 hover:underline"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default Projects;
