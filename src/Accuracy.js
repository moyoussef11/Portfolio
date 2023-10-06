import React, { useEffect, useRef, useState } from "react";
import cr1 from "./assets/images/cr1.png";
import cr2 from "./assets/images/cr2.jpeg";
import cr3 from "./assets/images/cr3.png";
import { motion } from "framer-motion";
const Accuracy = () => {
  const pic = [cr1, cr2, cr3];
  const [index, setIndex] = useState(0);
  const section = useRef('');
  const [show, setShow] = useState(false);

  window.onscroll = function () {
    if (window.scrollY>=section.current.offsetTop-400) {
      setShow(true);
    }
  }


  useEffect(() => {
    setTimeout(() => {
      setIndex(index + 1);
    }, [3000]);
    if (index === 3) {
      setIndex(0);
    }
  }, [index]);
  return (
    <div name="Certificate" className="sections" ref={section}>
      <div className=" w-full sm:w-[700px]">
        <div className="flex flex-col items-center justify-center sm:items-start">
          <h2 className="title">certificate</h2>
          <p className="font-bold my-1">I have obtained these certificates </p>
        </div>
        <div className="w-full shadow-2xl shadow-[#5E17EB] container rounded-md relative">
        {show?  <motion.img
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            src={pic[index]}
            className="w-full object-contain"
            alt="Certificate"
          />:''}
         {show? <span className="absolute top-0 right-0 py-1 px-3 m-3 bg-[#5E17EB] rounded font-bold text-white">
            {index+1}/{pic.length}
          </span>:""}
        </div>
      </div>
    </div>
  );
};

export default Accuracy;
