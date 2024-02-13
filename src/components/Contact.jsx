import { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github, linkedIn, insta } from '../assets';
import { myProfile } from '../constants';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log('>>>>>EEE>>>>>>>', e);
    console.log('>>>>>>>>>>>>', form);
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
            <a className="no-underline" href={`mailto:devanshugautam0@gmail.com?subject=Portfolio%20Connect&body=${form.message}`}>
            {loading ? "Sending..." : "Send"}
            </a>

            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <div className='flex-[0.75] bg-black-100 p-8 rounded-2xl mt-7'>
        <div className='flex justify-center'>

          <p className={styles.sectionSubText}>Social Media Links</p>
        </div>
        {/* <h3 className={styles.sectionHeadText}>Contact.</h3> */}
        {/* <p className=' font-normal text-white mt-6'> */}
        {/* <span className='text-white font-medium mb-4'>Git</span> */}
        {/* <div
            onClick={() => window.open('source_code_link', "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mt-7'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div> */}
        <div className='gap-5 flex justify-center'>
          <div
            onClick={() => window.open(myProfile.gitHub, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mt-7'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
          <div
            onClick={() => window.open(myProfile.linkedIn, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mt-7'
          >
            <img
              src={linkedIn}
              alt='source code'
              className='w-1/2 h-1/2 object-contain color-white'
            />
          </div>
          <div
            onClick={() => window.open(myProfile.insta, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mt-7'
          >
            <img
              src={insta}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>

        {/* </p> */}
      </div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");
