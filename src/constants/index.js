import {
  facebook,
  instagram,
  linkedin,
  twitter,
  send,
  shield,
  star,
  github,
  Me,
} from "../assets";

import {
  SiReact,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiSpring,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiApachecassandra,
  SiRedis,
  SiGrafana,
  SiFlutter,
  SiIonic,
  SiKotlin,
  SiDart,
  SiPython,
  SiElectron,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiOpencv,
  SiDocker,
  SiKubernetes,
  SiApachehadoop,
  SiApachespark,
  SiPandas,
  SiUnity,
  SiUnrealengine,
  SiBlender,
  SiGit,
  SiGithub,
  SiGitlab,
  SiVscodium,
  SiIntellijidea,
  SiJetbrains,
  SiAndroidstudio,
  SiAnaconda,
  SiDotnet,
  SiOculus,
  SiVite,
  SiRider,
  SiReaddotcv,
  SiNextdotjs,
} from "react-icons/si";

import { FaJava, FaVuejs, FaNode, FaAws } from "react-icons/fa";

import { FaMeta } from "react-icons/fa6";

import { VscAzure } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { DiDotnet, DiMysql, DiVisualstudio } from "react-icons/di";

import { TbBrandCSharp, TbBrandVscode } from "react-icons/tb";

import YoloIcon from "../assets/icons/yolo.svg?react";
import MixamoIcon from "../assets/icons/mixamo.svg?react";
import MatlabIcon from "../assets/icons/matlab.svg?react";

import CV_pl from "../assets/CV-version-pl.pdf";
import CV_en from "../assets/CV-version-en.pdf";

export const navLinks = [
  {
    id: "aboutme",
    title: "Aboute Me",
  },

  {
    id: "education",
    title: "Education",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "technologies",
    title: "Technologies",
  },
  // {
  //   id: "stats",
  //   title: "Stats",
  // },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "footer",
    title: "More",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "All Visits",
    value: "0",
  },
];

export const footerLinks = [
  {
    title: "Used Technologies",
    links: [
      {
        id: "footer-technology-1",
        name: "Vite",
        icon: SiVite,
        link: "https://vitejs.dev/guide/",
      },
      {
        id: "footer-technology-2",
        name: "React Dev",
        icon: SiReact,
        link: "https://react.dev/",
      },
      {
        id: "footer-technology-3",
        name: "Tailwind 4.0",
        icon: RiTailwindCssFill,
        link: "https://tailwindcss.com/blog/tailwindcss-v4",
      },
      {
        id: "footer-technology-4",
        name: "Npm JS",
        icon: FaNode,
        link: "https://www.npmjs.com/",
      },
    ],
  },
  {
    title: "My Resume",
    links: [
      {
        id: "footer-resume-1",
        name: "CV - Resume [EN]",
        icon: SiReaddotcv,
        file: CV_en,
      },
      {
        id: "footer-resume-2",
        name: "CV - Resume [PL]",
        icon: SiReaddotcv,
        file: CV_pl,
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        id: "footer-contact-1",
        name: "Email",
        icon: MdOutlineEmail,
        link: "mailto:lukasz.graczyk.dev@gmail.com",
      },
      {
        id: "footer-contact-2",
        name: "LinkedIn",
        icon: linkedin,
        link: "https://www.linkedin.com/in/%C5%82ukasz-graczyk-dev/",
      },
    ],
  },
  {
    title: "Projects",
    links: [
      {
        id: "footer-project-1",
        name: "GitHub",
        icon: github,
        link: "https://github.com/Giinsho?tab=repositories",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: linkedin,
    link: "https://www.linkedin.com/in/%C5%82ukasz-graczyk-dev/",
  },
  {
    id: "social-media-2",
    icon: github,
    link: "https://github.com/Giinsho?tab=repositories",
  },
];
export const technologies = [
  // Game Development and VR/AR
  {
    id: "feature-5",
    icon: star,
    title: "Game Development & VR/AR",
    content: [
      {
        id: "technologies-category-11",
        title: "Game Engines",
        content: [
          { id: "technology-1", icon: shield, title: "Unity" },
          { id: "technology-2", icon: shield, title: "Unreal Engine" },
        ],
      },
      {
        id: "technologies-category-12",
        title: "VR/AR",
        content: [
          { id: "technology-1", icon: shield, title: "Oculus Quest" },
          { id: "technology-2", icon: shield, title: "Oculus Quest 2" },
        ],
      },
      {
        id: "technologies-category-13",
        title: "3D Modeling",
        content: [
          { id: "technology-1", icon: shield, title: "Blender" },
          { id: "technology-2", icon: shield, title: "Mixamo" },
        ],
      },
    ],
  },

  // Artificial Intelligence and Machine Learning
  {
    id: "feature-2",
    icon: shield,
    title: "Artificial Intelligence and Machine Learning",
    content: [
      {
        id: "technologies-category-3",
        title: "Frameworks",
        content: [
          { id: "technology-1", icon: shield, title: "TensorFlow" },
          { id: "technology-2", icon: shield, title: "Keras" },
          { id: "technology-3", icon: shield, title: "Scikit-learn" },
          { id: "technology-4", icon: shield, title: "PyTorch" },
        ],
      },
      {
        id: "technologies-category-4",
        title: "Computer Vision",
        content: [
          { id: "technology-1", icon: shield, title: "OpenCV" },
          { id: "technology-2", icon: shield, title: "YOLO" },
          { id: "technology-3", icon: shield, title: "ResNet50" },
        ],
      },
    ],
  },

  // Programming and Web Development
  {
    id: "feature-3",
    icon: star,
    title: "Programming and Web Development",
    content: [
      {
        id: "technologies-category-5",
        title: "Frontend",
        content: [
          { id: "technology-1", icon: shield, title: "React.js" },
          { id: "technology-2", icon: shield, title: "Next.js" },
          { id: "technology-3", icon: shield, title: "Vue.js" },
          { id: "technology-4", icon: shield, title: "TypeScript" },
          { id: "technology-5", icon: shield, title: "JavaScript" },
          { id: "technology-6", icon: shield, title: "Angular" },
        ],
      },
      {
        id: "technologies-category-6",
        title: "Backend",
        content: [
          { id: "technology-1", icon: shield, title: ".NET Core" },
          { id: "technology-2", icon: shield, title: "Node.js" },
          { id: "technology-3", icon: shield, title: "Spring" },
        ],
      },
      {
        id: "technologies-category-7",
        title: "Databases (SQL/NoSQL)",
        content: [
          { id: "technology-1", icon: shield, title: "PostgreSQL" },
          { id: "technology-2", icon: shield, title: "MySQL" },
          { id: "technology-3", icon: shield, title: "MongoDB" },
          { id: "technology-4", icon: shield, title: "Firebase" },
          { id: "technology-5", icon: shield, title: "Cassandra" },
          { id: "technology-6", icon: shield, title: "Redis" },
          { id: "technology-7", icon: shield, title: "Grafana" },
        ],
      },
    ],
  },

  // Cloud and DevOps
  {
    id: "feature-4",
    icon: star,
    title: "Cloud and DevOps",
    content: [
      {
        id: "technologies-category-8",
        title: "Containerization",
        content: [
          { id: "technology-1", icon: shield, title: "Docker" },
          { id: "technology-2", icon: shield, title: "Kubernetes" },
        ],
      },
      {
        id: "technologies-category-9",
        title: "Cloud",
        content: [
          { id: "technology-1", icon: shield, title: "Azure" },
          { id: "technology-2", icon: shield, title: "AWS" },
        ],
      },
      {
        id: "technologies-category-10",
        title: "Big Data",
        content: [
          { id: "technology-1", icon: shield, title: "Apache Hadoop" },
          { id: "technology-2", icon: shield, title: "Apache Spark" },
          { id: "technology-3", icon: shield, title: "Pandas" },
        ],
      },
    ],
  },

  // Mobile & Desktop Application Development
  {
    id: "feature-1",
    icon: star,
    title: "Mobile & Desktop Application Development",
    content: [
      {
        id: "technologies-category-1",
        title: "Mobile Developer",
        content: [
          { id: "technology-1", icon: shield, title: "Flutter" },
          { id: "technology-2", icon: shield, title: "React Native" },
          { id: "technology-3", icon: shield, title: "Ionic Cordova" },
          { id: "technology-4", icon: shield, title: "Java" },
          { id: "technology-5", icon: shield, title: "Kotlin" },
          { id: "technology-6", icon: shield, title: "Dart" },
        ],
      },
      {
        id: "technologies-category-2",
        title: "Desktop Developer",
        content: [
          { id: "technology-1", icon: shield, title: "C#" },
          { id: "technology-2", icon: shield, title: ".NET" },
          { id: "technology-3", icon: shield, title: "Python" },
          { id: "technology-4", icon: shield, title: "Java" },
          { id: "technology-5", icon: shield, title: "Electron.js" },
        ],
      },
    ],
  },

  // Version Control Systems
  {
    id: "feature-6",
    icon: shield,
    title: "Version Control Systems",
    content: [
      {
        id: "technologies-category-14",
        title: "Tools",
        content: [
          { id: "technology-1", icon: shield, title: "Git" },
          { id: "technology-2", icon: shield, title: "GitHub" },
          { id: "technology-3", icon: shield, title: "GitLab" },
        ],
      },
    ],
  },

  // Development Environments
  {
    id: "feature-7",
    icon: star,
    title: "Development Environments",
    content: [
      {
        id: "technologies-category-15",
        title: "IDEs",
        content: [
          { id: "technology-1", icon: shield, title: "Visual Studio" },
          { id: "technology-2", icon: shield, title: "VS Code" },
          { id: "technology-3", icon: shield, title: "IntelliJ" },
          { id: "technology-4", icon: shield, title: "Rider" },
          { id: "technology-5", icon: shield, title: "Android Studio" },
          { id: "technology-6", icon: shield, title: "Anaconda" },
        ],
      },
    ],
  },

  // Scientific Computing & Numerical Methods
  {
    id: "feature-8",
    icon: star,
    title: "Scientific Computing and Numerical Methods",
    content: [
      {
        id: "technologies-category-16",
        title: "Tools",
        content: [{ id: "technology-1", icon: shield, title: "Matlab" }],
      },
    ],
  },
];

export const iconMap = {
  react: SiReact,
  angular: SiAngular,
  typescript: SiTypescript,
  javascript: SiJavascript,
  spring: SiSpring,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  cassandra: SiApachecassandra,
  redis: SiRedis,
  grafana: SiGrafana,
  flutter: SiFlutter,
  "ionic cordova": SiIonic,
  kotlin: SiKotlin,
  dart: SiDart,
  python: SiPython,
  "electron.js": SiElectron,
  tensorflow: SiTensorflow,
  pytorch: SiPytorch,
  keras: SiKeras,
  "scikit-learn": SiScikitlearn,
  opencv: SiOpencv,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  hadoop: SiApachehadoop,
  spark: SiApachespark,
  pandas: SiPandas,
  unity: SiUnity,
  "unreal engine": SiUnrealengine,
  ".NET": SiDotnet,
  blender: SiBlender,
  git: SiGit,
  github: SiGithub,
  gitlab: SiGitlab,
  "vs code": TbBrandVscode,
  intellij: SiIntellijidea,
  rider: SiRider,
  "android studio": SiAndroidstudio,
  anaconda: SiAnaconda,
  java: FaJava,
  YOLO: YoloIcon,
  "C#": TbBrandCSharp,
  "Vue.js": FaVuejs,
  ".NET Core": DiDotnet,
  "Node.js": FaNode,
  PostgreSQL: SiPostgresql,
  MySQL: DiMysql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  AWS: FaAws,
  Azure: VscAzure,
  "Apache Spark": SiApachespark,
  "Apache Hadoop": SiApachehadoop,
  "Oculus Quest": SiOculus,
  "Oculus Quest 2": FaMeta,
  mixamo: MixamoIcon,
  "Visual Studio": DiVisualstudio,
  matlab: MatlabIcon,
  "Next.js": SiNextdotjs,
};
