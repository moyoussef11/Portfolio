import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";
import { FaBars } from "react-icons/fa";
import {
  AiOutlineCloseCircle,
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillFacebook,
} from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [width, setWidth] = useState(0);
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    setWidth(`${(scrollTop / height) * 100}%`);
  });

 

  function toggleTheme() {
    document.body.classList.toggle("dark");
  }

  function handleClick() {
    setNav(false);
  }
  function handleNav() {
    setNav(!nav);
  }
  return (
    <>
      <div className="fixed h-20 w-full bg-[#202124] dark:bg-gray-100 text-white flex items-center justify-between z-10 left-0 px-1">
        <span
          style={{ width: width }}
          className="h-[2px] bg-[#5E17EB] absolute top-20 left-0 duration-100"
        ></span>
        <div className="w-24 ml-[-22px]">
          <img src={Logo} alt="logo" className="w-full" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 10 }}
          transition={{ duration: 2 }}
          className="hidden sm:flex"
        >
          <ul className="flex items-center space-x-10">
            <li className="navLi">
              <Link to="home" duration={300} smooth={true}>
                home
              </Link>
            </li>
            <li className="navLi">
              <Link to="about" duration={300} smooth={true}>
                about
              </Link>
            </li>
            <li className="navLi">
              <Link to="experience" duration={300} smooth={true}>
                experience
              </Link>
            </li>
            <li className="navLi">
              <Link to="work" duration={300} smooth={true}>
                work
              </Link>
            </li>
            <li className="navLi">
              <Link to="contact" duration={300} smooth={true}>
                contact
              </Link>
            </li>
            <li
              onClick={toggleTheme}
              className="btnHover cursor-pointer dark:text-black"
            >
              switch mode
            </li>
          </ul>
        </motion.div>
        <div
          onClick={handleNav}
          className="sm:hidden cursor-pointer hover:text-[#5E17EB]"
        >
          {!nav ? <FaBars size={"30"} className='dark:text-black' /> : <AiOutlineCloseCircle className='dark:text-black' size={"30"} />}
        </div>
        {/* mobile */}
        {nav ? (
          <motion.div
            initial={{ left: "-600px" }}
            animate={{ left: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-20 w-full bg-[#202124] dark:bg-gray-100 text-center z-10"
          >
            <ul className="flex flex-col space-y-10 py-5">
              <li className="navLi">
                <Link
                  to="home"
                  onClick={handleClick}
                  duration={300}
                  smooth={true}
                >
                  home
                </Link>
              </li>
              <li className="navLi">
                <Link
                  to="about"
                  onClick={handleClick}
                  duration={300}
                  smooth={true}
                >
                  about
                </Link>
              </li>
              <li className="navLi">
                <Link
                  to="experience"
                  onClick={handleClick}
                  duration={300}
                  smooth={true}
                >
                  experience
                </Link>
              </li>
              <li className="navLi">
                <Link
                  to="work"
                  onClick={handleClick}
                  duration={300}
                  smooth={true}
                >
                  work
                </Link>
              </li>
              <li className="navLi">
                <Link
                  to="contact"
                  onClick={handleClick}
                  duration={300}
                  smooth={true}
                >
                  contact
                </Link>
              </li>
              <li
                onClick={toggleTheme}
                className="btnHover cursor-pointer w-fit mx-auto dark:text-black"
              >
                switch mode
              </li>
            </ul>
          </motion.div>
        ) : (
          ""
        )}
      </div>
      <div className="hidden md:flex flex-col fixed left-0 top-[35%] text-gray-200">
        <ul>
          <li className="LiIcon bg-[#0A66C2]">
            <a
              href="https://www.linkedin.com/in/mohamed-youssef11/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full"
            >
              linkenin <BsLinkedin size={50} />
            </a>
          </li>
          <li className="LiIcon bg-[#171515]">
            <a
              href="https://github.com/moyoussef11?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full"
            >
              github
              <AiFillGithub size={50} />
            </a>
          </li>
          <li className="LiIcon bg-[#53EE6E]">
            <a
              href="https://api.whatsapp.com/send?phone=201146646254&app=facebook&entry_point=page_cta"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full"
            >
              whatsapp
              <AiOutlineWhatsApp size={50} />
            </a>
          </li>
          <li className="LiIcon bg-[#0866FF]">
            <a
              href="https://www.facebook.com/profile.php?id=100038189556961"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full"
            >
              facebook
              <AiFillFacebook size={50} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
