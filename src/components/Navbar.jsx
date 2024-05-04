import React, {useEffect, useState} from 'react'

/* Using to navigate to other parts of the page*/
import { Link } from "react-router-dom";  

import { styles } from '../styles';
import { navLinks } from '../constants/constants';
import { logo, menu, close } from '../assets';


const Navbar = () => {
  const [active, SetActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary`}
      /* This is supposed to be className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`} -> Note the word fixed */
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" 
        onClick={() => 
          {SetActive("");
          window.scrollTo(0,0);
          }}
        >
          <img src={logo} aly="logo" className="w-9 h-9 object-contain" />
          <p className=" text-white text-[18px] font-bold cursor-pointer"> Hamidat Bello <span className="sm:block hidden">| Software Devloper</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li 
              key={Link.id} 
              className={`${ active === Link.title 
              ? "text-white" 
              : "text-secondary" }
              hover:text-white text-[18px] font-medium cursor-pointer`}
              >
              <a href={'#${Link.id}'}>{Link.title}</a>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  )
}

export default Navbar;