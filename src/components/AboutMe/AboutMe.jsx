import React from "react";
import styles from "../../style";

import NameAndPhoto from "./NameAndPhoto";

import AdditionalCourses from "./AdditionalCourses";
import AdditionalEducationCourses from "./AdditionalEducationCourses";
import Typing from "../TypingAnimation/Typing";
import AboutMeInfo from "./AboutMeInfo";
import { check, Me } from "../../assets";
import Education from "../Education/Education";
const AboutMe = () => {
  return (
    <section id="aboutme">
      <div className="sm:flex items-center w-50% h-50% sm:h-full sm:w-full  sm:gap-0   xl:px-0 sm:px-16 px-6 ">
        <AboutMeInfo />
        <NameAndPhoto name="Łukasz Graczyk" image={Me} />
      </div>
    </section>
  );
};

export default AboutMe;
