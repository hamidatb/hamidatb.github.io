import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-8'>
          <p className='text-white font-medium mb-4'>You can reach me via GitHub, email or on LinkedIn:</p>
          <p className='bg-tertiary py-4 px-6 text-white rounded-lg'>
            🔗 GitHub: <a href="https://github.com/hamidatb" target="_blank" rel="noopener noreferrer">github.com/hamidatb</a>
          </p>
          <p className='bg-tertiary py-4 px-6 text-white rounded-lg'>
            🔗 Email: <a href="mailto:hami.develops@gmail.com">hami.develops@gmail.com</a> 
          </p>
          <p className='bg-tertiary py-4 px-6 text-white rounded-lg'>
            🔗 LinkedIn: <a href="https://www.linkedin.com/in/hamidatbello" target="_blank" rel="noopener noreferrer">linkedin.com/in/hamidatbello</a> 
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};



export default SectionWrapper(Contact, "contact");
