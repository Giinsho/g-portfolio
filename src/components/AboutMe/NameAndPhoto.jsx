import styles from "../../style";
const NameAndPhoto = ({ name, image }) => {
  return (
    <div className=" w-full">
      <div className="flex-1 flex justify-center items-center relative">
        <img
          src={image}
          alt="my-picture"
          className=" w-[40%] h-[40%] relative z-[5] rounded-full"
        />
        <h1
          className="  font-poppins font-semibold ss:text-[72px] text-[52px] text-white 
          ss:leading-[100px] leading-[75px] md:5"
        >
          <span className="text-gradient">{name}</span>{" "}
          
        </h1>
        

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </div>
  );
};

export default NameAndPhoto;
