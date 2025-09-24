import React from "react";
import styles, { layout } from "../../style";
import Typing from "../TypingAnimation/Typing";

const AboutMeInfo = () => (
  <section className={`${layout.section}`}>
    <div className={`${layout.sectionInfo} xl:px-0 sm:px-12 ml-5 mr-5`}>
      <h2 className={`${styles.heading2} ml-5`}>
        <Typing
          texts={["About me"]}
          typingSpeed={220}
          deletingSpeed={40}
          pauseBetween={5000}
          loop={true}
        />
      </h2>
      <h1 className="sm:ml-5  mr-[10%] font-poppins text-[20px] font-bold text-secondary">
        Master of Science in Computer Science
      </h1>

      <p
        className={`${styles.paragraph} max-w-[470px] mt-5 sm:ml-5 mr-[10%] text-dim-white`}
      >
        I am a dedicated and driven programmer with a{" "}
        <span className="text-secondary font-semibold">
          Master of Science in Computer Science
        </span>
        . I have a strong focus on{" "}
        <span className="text-secondary font-semibold">
          machine learning, artificial intelligence, and Python-based
          development
        </span>
        , including reinforcement learning, computer vision, and autonomous
        systems. I am looking for a{" "}
        <span className="text-secondary font-semibold">team</span> where I can
        apply my skills and gain new experience. I specialize in{" "}
        <span className="text-secondary font-semibold">Python</span> for ML/AI
        projects,{" "}
        <span className="text-secondary font-semibold">Unity (C#)</span> for
        game development, and{" "}
        <span className="text-secondary font-semibold">React</span> for web
        applications. My goal is to contribute to innovative projects while
        continuously expanding my expertise in intelligent systems and modern
        software development.
      </p>
    </div>
  </section>
);

export default AboutMeInfo;
