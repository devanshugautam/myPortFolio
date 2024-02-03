/* eslint-disable react/prop-types */
import { useState } from 'react';
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, website } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, myProfile } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Modal from './Checkmodal.jsx';

// eslint-disable-next-line react-refresh/only-export-components
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  siteLink,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log('opening model');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // function handleClick(){
  //   console.log('here>>>>>>>>>>>>>');
  //   openModal();
  // }
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>


        <div className="h-[430px] flex flex-col justify-between" onClick={openModal}>
          <div className='relative w-full h-[230px]'>
          <div className='relative w-full h-[230px]'>
            {/* <div className="h-full"> */}
              <img
                src={image}
                alt='project_image'
                className='w-full h-[32vh] object-cover rounded-2xl'
              />
            </div>

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
              <div
                onClick={() => window.open(siteLink, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-1'
              >
                <img
                  src={website}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />

              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          {/* <h1 className='text-white font-bold text-[30px] hover:text-rose-600'>
            <a href={siteLink} target='_blank' rel="noreferrer">{name}</a>
          </h1>
          <p className='text-black'>Here is your modal :-  {name}.</p> */}
          {/* <div className="rounded-lg overflow-hidden shadow-md bg-gradient-to-r from-tertiary to-indigo-600 text-white">
            <div className="p-6">
              <h2 className="font-bold text-xl mb-2">Project Name</h2>
              <p className="text-sm mb-4">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="text-sm mb-4">Technologies Used: React, Node.js, MongoDB</p>
              <p className="text-sm font-semibold mb-2">Key Responsibilities:</p>
              <ul className="list-disc pl-4">
                <li>Implemented front-end using React.</li>
                <li>Designed and developed the back-end API with Node.js.</li>
                <li>Managed the database using MongoDB.</li>
              </ul>
            </div>
          </div> */}
          <div className="mt-[30px] h-[450px] rounded-lg overflow-hidden shadow-md bg-gradient-to-r from-tertiary to-indigo-600 text-white overflow-y-auto">
            <div className="">
              <img src='' alt="Project Image" className="w-[50vw]" />
              <div className="absolute top-0 right-0 m-2 bg-indigo-600 px-2 py-1 rounded-full">
                <span className="text-sm font-semibold">New</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="font-bold text-xl mb-2">Project Name</h2>
              <p className="text-sm mb-4">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="text-sm mb-4">Technologies Used: React, Node.js, MongoDB</p>
              <p className="text-sm font-semibold mb-2">Key Responsibilities:</p>
              <ul className="list-disc pl-4">
                <li>Implemented front-end using React.</li>
                <li>Designed and developed the back-end API with Node.js.</li>
                <li>Managed the database using MongoDB.</li>
              </ul>
              <div className="flex justify-end mt-4">
                <button className="bg-white hover:bg-gradient-to-r from-rose-pink to-rose-600 py-2 px-4 rounded shadow-white hover:shadow-2xl text-rose-600">
                  Like
                </button>
              </div>
            </div>
          </div>





        </Modal>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {myProfile.myProjectDesc}
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-6'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div >
    </>
  );
};

export default SectionWrapper(Works, "");
