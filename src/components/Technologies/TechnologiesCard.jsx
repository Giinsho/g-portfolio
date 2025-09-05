import TechnologyCategory from "./TechnologyCategory";
import { technologies } from "../../constants";

const TechnologiesCard = ({ title, content, index }) => (
  <div
    className={`flex flex-row p-1 rounded-[20px] ${
      index !== technologies.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className="flex-1 flex flex-col ml-1">
      <h3 className="font-poppins text-white font-semibold sm:text-[18px] text-[24px] sm:leading-[24px] leading-[28px] mb-1">
        {title}
      </h3>
      <span className="font-poppins text-dimWhite font-normal  mb-1">
        {content.map((x, index) => (
          <TechnologyCategory key={x.id} {...x} index={index} />
        ))}
      </span>
    </div>
  </div>
);

export default TechnologiesCard;
