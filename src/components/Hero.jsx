import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

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
            👋🏾 I'm a 4th-year Computing Science student at the University of Alberta, dedicated to creating software that solves real-world problems. 
            Dive into my portfolio to see how I blend innovation with purpose.
            </p>
            
        </div>
      </div>

    
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;