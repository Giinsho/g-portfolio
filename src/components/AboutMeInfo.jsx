import React from "react";
import styles, { layout } from "../style";

const AboutMeInfo = () => (
  <section className={`${layout.section} justify-center items-center flex flex-col`}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} m-5`}>About me</h2>
      <h2 className="m-5 text-secondary">Master of Science in Computer Science</h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-5 text-dim-white`}>
        I am an ambitious and engaged programmer with a{" "}
        <span className="text-secondary font-semibold">Master of Science in Computer Science</span>.
        I am passionate about <span className="text-secondary font-semibold">artificial intelligence, 
        machine learning algorithms, and the development of applications, websites, games, and autonomous 
        vehicle control systems.</span> 

        <span className="text-secondary font-semibold"> I am seeking a team</span> where I can develop my 
        skills and gain new experience. 

        I specialize in game development using{" "}
        <span className="text-secondary font-semibold">Unity (C#) and Unreal Engine (C++)</span>, as well as{" "}
        <span className="text-secondary font-semibold">React development</span> for web applications. 

        My goal is to contribute to innovative projects while continuously expanding my expertise in 
        game programming and modern web technologies.
      </p>
    </div>
  </section>
);

export default AboutMeInfo;
