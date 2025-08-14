/* eslint-disable react/prop-types */
// import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

// const FeedbackCard = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className='bg-black-200 p-10 rounded-3xl w-full shadow shadow-blue-500 lg:max-w-[calc(100vw-300px)] md:max-w-[calc(100vw-400px)] max-w-[calc(100vw-100px)]'
//   >
//     <p className='text-white font-black text-[48px]'>&quot;</p>

//     <div className='mt-1'>
//       <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

//       <div className='mt-7 flex justify-between items-center gap-1'>
//         <div className='flex-1 flex flex-col lg:max-w-[calc(100%-290px)] md:max-w-[calc(100%-390px)] max-w-[calc(100%-90px)]'>
//           <p className='text-white font-medium text-[16px]'>
//             <span className='blue-text-gradient'>@</span><span className="hover:font-bold hover:cursor-pointer"> {name} </span>
//           </p>
//           <p className='mt-1 text-secondary text-[12px]'>
//             {designation} of {company}
//           </p>
//         </div>

//         <img
//           src={image}
//           alt={`feedback_by-${name}`}
//           className='w-10 h-10 rounded-full object-cover hover:shadow hover:shadow-blue-500'
//         />
//       </div>
//     </div>
//   </motion.div>
// );

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-[22px] rounded-2xl shadow shadow-blue-500 
               w-full lg:max-w-[calc(100vw-300px)] max-w-xs sm:max-w-sm md:max-w-md 
               flex-shrink-0 overflow-hidden"
  >
    <p className="text-white font-black text-4xl sm:text-5xl mb-2">"</p>

    <p className="text-white tracking-wide text-sm sm:text-base leading-relaxed">
      {testimonial}
    </p>

    <div className="mt-5 flex justify-between items-center gap-3">
      <div className="flex-1 min-w-0">
        <p className="text-white font-medium text-sm sm:text-base truncate">
          <span className="blue-text-gradient">@</span>
          <span className="hover:font-bold hover:cursor-pointer"> {name} </span>
        </p>
        <p className="mt-1 text-secondary text-xs sm:text-sm truncate">
          {designation} of {company}
        </p>
      </div>

      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0 hover:shadow hover:shadow-blue-500"
      />
    </div>
  </motion.div>
);


const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] overflow-hidden">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[25vh]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>📣 Hear from others</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      {/* Responsive Wrapper */}
      <div className="flex flex-col md:flex-row md:flex-nowrap gap-5 md:w-[180vw] group/marquee">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            // className="sm:mt-5 sm:pb-5 md:mt-8 md:pb-8 lg:mt-12 lg:pb-12 w-full md:w-[33%] shrink-0 animate-swiper md:[animation-duration:9s] group-hover/marquee:[animation-play-state:paused]"
            className="mt-10 pb-14 sm:[pb-5] sm:[mt-5] w-full md:w-[33%] shrink-0  animate-swiper md:[animation-duration:9s] group-hover/marquee:[animation-play-state:paused]"
          >
            <FeedbackCard index={index} {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};



// const Feedbacks = () => {
//   return (
//     <div className={`mt-12 bg-black-100 rounded-[20px] overflow-hidden`}>
//       <div
//         className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[25vh]`}
//       >
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>📣 Hear from others</p>
//           <h2 className={styles.sectionHeadText}>Testimonials.</h2>
//         </motion.div>
//       </div>
//       <div className="w-[180vw] flex flex-nowrap gap-5 group/marquee">
//         {testimonials.map((testimonial, index) => (
//           <div className={`mt-10 pb-14 flex flex-nowrap gap-5 animate-swiper [animation-duration:5s] group-hover/marquee:[animation-play-state:paused]`}>
//             <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
{/* <div className={`mt-10 pb-14 flex flex-nowrap gap-5 animate-swiper [animation-duration:10s] group-hover/marquee:[animation-play-state:paused]`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
            ))}
            </div> */}

export default SectionWrapper(Feedbacks, "");
