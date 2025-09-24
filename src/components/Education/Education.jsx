import React from "react";
import styles from "../../style";
import DownloadCV from "../Links/DownloadCV";
import EducationItem from "./EducationItem";
import NameAndPhoto from "../AboutMe/NameAndPhoto";
import CopyEmailSection from "../Links/CopyEmailSection";
import AdditionalCourses from "../AboutMe/AdditionalCourses";
import AdditionalEducationCourses from "../AboutMe/AdditionalEducationCourses";
import Typing from "../TypingAnimation/Typing";
import AboutMeInfo from "../AboutMe/AboutMeInfo";
import { check, Me } from "../../assets";

const Education = () => {
  return (
    <section id="education">
      <div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[32px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          <Typing
            texts={["Education"]}
            typingSpeed={220}
            deletingSpeed={40}
            pauseBetween={5000}
            loop={true}
          />
        </h1>

        <EducationItem
          icon={check}
          degree="Master of Computer Science"
          major="Major: Computational Intelligence"
          university="University in Siedlce"
        />

        <EducationItem
          icon={check}
          degree="Bachelor of Computer Science"
          major="Major: Mobile Systems"
          university="University of Natural Sciences and Humanities in Siedlce"
        />

        <EducationItem
          icon={check}
          degree="Completion of secondary school education"
          university="II High School of Queen Jadwiga in Siedlce"
        />

        <div className="mr-3">
          <AdditionalCourses />
        </div>
        <div className="mr-3">
          <AdditionalEducationCourses />
        </div>
      </div>
    </section>
  );
};
export default Education;
