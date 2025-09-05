import styles from "../../style";
const AdditionalEducationCourses = () => {
  const courses = [
    'Active participation in the national interdisciplinary conference "Contemporary Applications of Computer Science 2022"',
    'Participation in the conference "Inclusion without barriers" inaugurating the grant project "Pilot Implementation of the Model of Specialist Centers Supporting Inclusive Education"',
    'Nomination in the event "Best Student of UPH in the 2022/2023 academic year"',
  ];

  return (
    <>
      <h1 className="font-poppins font-semibold ss:text-[22px] text-[32px] text-white ss:leading-[100px] leading-[75px]">
        <br className="sm:block hidden" />{" "}
        <span>ADDITIONAL ACTIVE PARTICIPATION RELATED TO EDUCATION</span>
      </h1>
      <div className=" bg-cyan-800/10  p-5 rounded-[20px] w-[100%] sm:w-[50%]">
        <ul className="mt-5">
          {courses.map((course, index) => (
            <li
              key={`course-${index}`}
              className=" text-dim-white font-poppins text-[16px] leading-[24px] mb-2"
            >
              {index + 1}. {course}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdditionalEducationCourses;
