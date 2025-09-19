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

import Demo from "./components/Spline/demo";
const MaintenanceMode = false;
const App = () => {
  if (MaintenanceMode) {
    return <Maintenance />;
  }
  return (
    <div className={`bg-primary w-full overflow-hidden`}>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Demo />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutMe />
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
