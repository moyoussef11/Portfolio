import React, { useEffect, useState } from "react";
import cr1 from "./assets/images/cr1.png";
import cr2 from "./assets/images/cr2.jpeg";
import cr3 from "./assets/images/cr3.png";
import { motion } from "framer-motion";
const Accuracy = () => {
  const pic = [cr1, cr2, cr3];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setIndex(index + 1);
    }, [3000]);
    if (index === 3) {
      setIndex(0);
    }
  }, [index]);
  return (
    <div name="Certificate" className="sections">
      <div className=" w-full sm:w-[700px]">
        <div className="flex flex-col items-center justify-center sm:items-start">
          <h2 className="title">certificate</h2>
          <p className="font-bold my-1">I have obtained these certificates </p>
        </div>
        <div className="w-full shadow-2xl shadow-[#5E17EB] container rounded-md">
          <motion.img
            initial={{ x:200 }}
            animate={{  x:0}}
            transition={{duration:.5}}
            src={pic[index]}
            className="w-full object-contain"
            alt="Certificate"
          />
        </div>
      </div>
    </div>
  );
};

export default Accuracy;
