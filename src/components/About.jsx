import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>An Overview Of Me:</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <br></br>
        <p>
          I’m a 4th-year Computing Science student at the University of Alberta, passionate about designing scalable systems, architecting clean code, and creating software with real-world impact.
        </p>
        <br></br>

        <p>
          Regarding programming, I approach software with a craftsman's mindset — inspired by timeless lessons from books like *The Pragmatic Programmer* and driven by a curiosity to solve meaningful problems through elegant engineering.
        </p>
        <br></br>

        <p>
          Outside of tech (suprisingly I do do things other than code), you’ll find me immersed in books, experimenting with oil painting, or spending time with loved ones.
        </p>

        <br></br>

        <p>
          Note: A lot of my personal projects are rooted in accessibility — I believe technology should empower, not exclude, and I’m driven to build inclusive tools that reflect that. 
        </p>
      </motion.p>

      
    </>
  );
};

export default SectionWrapper(About, "about");