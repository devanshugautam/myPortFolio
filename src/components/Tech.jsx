// import React from "react";

// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <div className=" group hover:text-white cursor-pointer" key={index}>
          <div className="shadow-md shadow-indigo-500/50 rounded-full overflow-hidden w-16 h-16 mx-auto border-2 border-white">
            <img src={technology.icon} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-700 group-hover:text-white transition-colors">{technology.name}</p>
          </div>
        </div>
      ))}
      {/* {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))} */}
    </div>
  );
};

export default SectionWrapper(Tech, "");
