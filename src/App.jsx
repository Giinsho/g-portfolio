import React from "react";
import styles from "./style";
import {
  Navbar,
  Technologies,
  GitHubProjects,
  Foot,
  Stats,
  AboutMe,
  Maintenance,
  Experience,
} from "./components";

import DownloadCV from "./components/Links/DownloadCV";
import CopyEmailSection from "./components/Links/CopyEmailSection";
import EducationItem from "./components/Education/EducationItem";
import Education from "./components/Education/Education";
import Spline from "./components/Spline/Spline";
import JobSign from "./components/JobAssign/JobSign";

const MaintenanceMode = false;

const App = () => {
  if (MaintenanceMode) {
    return <Maintenance />;
  }

  return (
    <div className="bg-primary w-full overflow-hidden relative">
      {/* background spline */}
      <Spline />

      {/* foreground content */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <JobSign />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutMe />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <DownloadCV />
          <CopyEmailSection />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <Education />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Experience />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <GitHubProjects />
          <Technologies />
          {/* <Stats /> */}
          <Foot />
        </div>
      </div>
    </div>
  );
};
export default App;
