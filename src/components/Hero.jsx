import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[150px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#de81d4]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="text-center mt-5">
          <h1 className={`${styles.heroSubText} text-white`}>
            Hi, I'm
          </h1>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#FFFFFF]'>Hamidat</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 mb-10 text-white-100`}>
            <br className='sm:block hidden' />
            👋🏾 I'm a 4th-year Computing Science student at the University of Alberta, passionate about building meaningful, user-focused software.  
  <br /><br />
  I thrive at the intersection of innovation and purpose<br /> — blending precision with creativity to build<br /> software that's robust, elegant, and built to last.

            </p>

            <div className="flex justify-center gap-8 mt-6">
            <a
              href="https://www.linkedin.com/in/hamidatbello"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#f7c9da] transition-colors duration-300 text-4xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/hamidatb" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#f7c9da] transition-colors duration-300 text-4xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.athenacodes.org/about-me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#f7c9da] transition-colors duration-300 text-4xl"
              aria-label="Website"
            >
              <FaGlobe />
            </a>


          </div>
            
        </div>
      </div>

    
    </section>
  );
};

export default Hero;