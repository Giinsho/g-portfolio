import React from "react";
import styles from "../style";
import DownloadCV from "./DownloadCV";
import EducationItem from "./AboutMe/EducationItem";
import NameAndPhoto from "./AboutMe/NameAndPhoto";
import CopyEmailSection from "./AboutMe/CopyEmailSection";
import AdditionalCourses from "./AboutMe/AdditionalCourses";
import AdditionalEducationCourses from "./AboutMe/AdditionalEducationCourses";
import AboutMeInfo from "./AboutMeInfo";
import { check, Me } from "../assets";

const AboutMe = () => {
  return (
    <section id="aboutme" className={` ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col sm:flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="sm:flex items-center w-50% h-50% gap-10 sm:h-full sm:w-full  sm:gap-0">
           <AboutMeInfo className="sm:flex-1  h-[50%] sm:h-full" />
          <NameAndPhoto
            name="Łukasz Graczyk"
            image={Me}
            className="sm:flex-1 h-[50%] sm:h-full"
          />
         
        </div>
        <DownloadCV />
        <CopyEmailSection />
        <h1 id="education" className="flex-1 font-poppins font-semibold ss:text-[32px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          <span>Education</span>
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

export default AboutMe;
