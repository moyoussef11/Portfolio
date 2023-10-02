import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {

  return (
    <div name="home" className="sections">
      <motion.div initial={{ opacity: 0, x:50}} animate={{opacity:1,x:0}} transition={{duration:1}} className="max-w-[700px] p-5 flex flex-col items-center sm:items-start space-y-2 mt-5">
        <p className="text-[#5E17EB]">Hi, my name is</p>
        <h1 className="sm:text-3xl capitalize font-bold">mohamed youssef</h1>
        <h3 className="capitalize font-bold text-3xl md:text-5xl text-slate-400">
          i'm a front end developer.
        </h3>
        <p className="text-sm">
          👋Hello and welcome to my portfolio. i'm a front end developer. with
          focus in React, and highly skilled in HTML, CSS, JavaScript, Tailwind
          CSS, Bootstrap, and responsive designs.
        </p>
        <div className="flex items-center space-x-3">
          <div className="group">
            <Link to="work" smooth={true} duration={500}>
              <button className="btnHover">
                view work
                <AiOutlineArrowRight className="group-hover:rotate-90 duration-200 ml-2" />
              </button>
            </Link>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1_-GAcenIc_BcthwKKO6ROcC58yd3QMJ8/view?usp=drive_link"
            className="btnHover"
          >
            download CV
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
