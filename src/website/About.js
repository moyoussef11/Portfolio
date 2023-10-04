import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div name="about" className="sections">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="h-[400px] w-full sm:w-[700px] flex items-center justify-center flex-col"
      >
        <h2 className="title">about</h2>
        <div className="flex flex-col text-center sm:text-left sm:flex-row items-center justify-between space-x-5 space-y-5 p-2">
          <div className="w-full sm:w-1/2">
            <p className="capitalize font-bold sm:text-2xl text-slate-400">
              Hello I'm Mohamed youssef a 19 years old, a passionate Front-End
              Developer and a student of Computer Science.
            </p>
          </div>
          <div className=" className=w-full sm:w-1/2">
            <p className="text-sm">
              I have gained valuable experience in front-end development. I have
              a strong understanding of common web languages ​​such as HTML,
              CSS, and JavaScript, and use a framework such as React to create
              powerful and dynamic applications. I am constantly improving my
              skills and keeping up with the latest developments in front-end
              development, to ensure I follow best practices and use the most
              efficient tools.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;


