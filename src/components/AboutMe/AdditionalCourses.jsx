import styles from "../../style";
const AdditionalCourses = () => {
  const courses = [
    "Java programming - Mooc.fi",
    "Data analysis with python 2021 - mooc.fi",
    "CS50's Web Programming with Python and JavaScript",
    "Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games",
  ];

  return (
    <>
      <h1 className="font-poppins font-semibold ss:text-[22px] text-[32px] text-white ss:leading-[100px] leading-[75px]">
        <br className="sm:block hidden" /> <span>Courses</span>
      </h1>
      <div className=" bg-cyan-800/10  p-5 rounded-[20px] w-[100%]">
        <ul className="mt-5">
          {courses.map((course, index) => (
            <li
              key={`course-${index}`}
              className=" text-dim-white font-poppins font-semibold text-[16px] leading-[24px] mb-2"
            >
              {index + 1}. {course}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdditionalCourses;
