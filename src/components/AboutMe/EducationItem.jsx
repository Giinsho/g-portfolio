import styles from "../../style";
const EducationItem = ({ icon, degree, major, university }) => {
    return (
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={icon} alt="check" className="w-[32px] h-[32px]" />
        <p className="ml-2">
          <span className="text-white text-[20px]">{degree}</span>
          {major && (
            <span className="font-semibold flex flex-col text-secondary">{major}</span>
          )}
          <span className="text-dim-white flex flex-col">{university}</span>
        </p>
      </div>
    );
  };
  
  export default EducationItem;
  