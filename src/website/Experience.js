import React, { useState } from "react";
import { dataEperience } from "../assets";
import { motion } from "framer-motion";


const Experience = () => {
  const [num, setNum] = useState(4);
  const sliceData = dataEperience.slice(0, num);
  const showMore = () => {
    setNum(num + num);
  };
  const show = sliceData.map((item) => (
    <div
      key={item.id}
      className="w-1/2 sm:w-1/4 flex flex-col items-center justify-center gap-2"
    >
      <img
        src={item.pic}
        className="w-full h-20 object-contain hover:scale-150 duration-300"
        alt="react"
      />
      <p className="capitalize font-bold">{item.title}</p>
    </div>
  ));
  return (
    <div name="experience" className="sections">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
        className="w-full sm:w-[700px] flex flex-col"
      >
        <div className="flex flex-col items-center justify-center sm:items-start">
          <h2 className="capitalize text-2xl sm:text-4xl font-bold border-b-4 border-[#5E17EB] text-slate-200">
            Experience
          </h2>
          <p className="font-bold my-1">
            These are the technologies I've worked with
          </p>
        </div>
        <div className="w-full py-5 flex flex-wrap space-y-5">{show}</div>
        {sliceData.length === 8 ? (
          ""
        ) : (
          <button className="btnHover w-fit mx-auto" onClick={() => showMore()}>
            showMore
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default Experience;
