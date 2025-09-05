import React, { useEffect, useState } from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    let visitCount = localStorage.getItem("visitCount");

    if (!visitCount) {
      visitCount = 1;
    } else if (!sessionStorage.getItem("visitTracked")) {
      visitCount = parseInt(visitCount) + 1;
    }

    localStorage.setItem("visitCount", visitCount);
    sessionStorage.setItem("visitTracked", "true");
    setVisits(visitCount);

    stats.forEach((stat) => {
      if (stat.id === "stats-2") {
        stat.value = `${visitCount}+`;
      }
    });
  }, []);

  return (
    <section id="stats" className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        <h1 className="font-poppins font-normal xs:text-[30px] text-[25px] xs:leading-[28px] leading-[21px] text-gradient uppercase ml-3 overflow-hidden">
            STATS
        </h1>
        <br/>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-3`}>
          <h2 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h2>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[28px] leading-[21px] text-gradient uppercase ml-3 overflow-hidden">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
