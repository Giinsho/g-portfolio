import React from "react";
import styles from "../style";
import { check, robot } from "../assets";

const belchor = [
  "Implementation of scripts in C#",
  "Working with the Unity game engine",
  "Scene creation",
  "Integration with a desktop system",
  "Configuring the application for Oculus Quest and Oculus Quest 2",
  "Creating therapeutic scenarios using scripts, animations, sounds, and interactive objects",
  "Team collaboration, presenting the application and its functionality at public events and conferences",
  "Handling Oculus equipment (testing, debugging, optimization)",
];

const master = [
  "Implementing and testing reinforcement learning algorithms (PPO, SAC) in autonomous driving simulations",
  "Using neural networks (FFN, ResNet50, Nvidia PilotNet) for analyzing camera images",
  "Integrating YOLO and vision algorithms for obstacle detection",
  "Running experiments in simulation environments: Unity and GTA V",
  "Optimization and performance analysis of control algorithms in autonomous vehicles",
];

const Experience = () => {
  return (
    <section
      id="experience"
      className={`flex md:flex-row flex-col ${styles.paddingY} text-dim-white`}
    >
      <div className="flex-1 flex flex-col xl:px-0 sm:px-16 px-6">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Experience <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Projects</span>
          </h1>
        </div>

        <div className="flex flex-col gap-4 mt-5">
          <h2 className="text-white font-poppins font-semibold text-[22px] leading-[27px]">
            VR Therapy Project
          </h2>
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <p className={`${styles.paragraph} ml-2`}>
              System supporting therapeutic sessions aimed at helping
              individuals with social anxiety disorders. This project later
              evolved into my engineering thesis.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {belchor.map((task, index) => (
              <div
                key={index}
                className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
              >
                <img src={check} alt="check" className="w-[32px] h-[32px]" />
                <p
                  className={`${styles.paragraph} ml-2 text-white font-normal`}
                >
                  {task}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-white font-poppins font-semibold text-[22px] leading-[27px] mt-4">
            Master's Thesis: Application of AI in Autonomous Vehicle Control
            Systems
          </h2>
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
            <img src={check} alt="check" className="w-[32px] h-[32px]" />
            <p className={`${styles.paragraph} ml-2`}>
              Research on AI-based control systems for autonomous vehicles,
              including reinforcement learning and computer vision techniques.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {master.map((task, index) => (
              <div
                key={index}
                className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
              >
                <img src={check} alt="check" className="w-[32px] h-[32px]" />
                <p
                  className={`${styles.paragraph} ml-2 text-white font-normal`}
                >
                  {task}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center relative md:mt-0">
        <img
          src={robot}
          alt="robot"
          className="h-auto w-full object-contain relative z-10 rounded-[20px]  opacity-80 "
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient blur"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      </div>
    </section>
  );
};

export default Experience;
