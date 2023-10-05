import { motion } from "framer-motion";
import React from "react";
import { workData } from "../assets";

const Work = () => {

  const showWork = workData.map((item, index) => (
    <div
      key={index}
      style={{
        backgroundImage: `url(${item.pic})`,
      }}
      className="shadow-lg shadow-[#5E17EB] group container rounded-md flex justify-center items-center mx-auto bg-no-repeat bg-cover h-[200px]"
    >
      {/* hover effects */}
      <div className="h-full w-full flex items-center opacity-0 justify-center group-hover:bg-[#5E17EB] group-hover:opacity-75 duration-300 rounded-lg">
        <div className="flex justify-between space-x-5">
          <a
            href={item.repo}
            target="_blank"
            rel="noreferrer"
          >
            <button className="p-1 bg-white text-[#5E17EB] rounded-full capitalize font-bold hover:text-white hover:bg-[#5E17EB] duration-300">
              repo
            </button>
          </a>
          <a
            href={item.demo}
            target="_blank"
            rel="noreferrer"
          >
            <button className="p-1 bg-white text-[#5E17EB] rounded-full capitalize font-bold hover:text-white hover:bg-[#5E17EB] duration-300">
              demo
            </button>
          </a>
        </div>
      </div>
    </div>
  ));
  
  return (
    <div name="work" className="sections">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="max-w-[700px] mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8 flex flex-col items-center sm:items-start">
          <p className="title">Work</p>
          <p className="font-bold my-1">
            check out some of my recent work. To see more go to
            <a
              href="https://github.com/moyoussef11?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="capitalize font-bold text-[#5E17EB] ml-1"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {showWork}
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
