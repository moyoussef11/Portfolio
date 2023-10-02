import { motion } from "framer-motion";
import React from "react";

const Work = () => {
  return (
    <div name="work" className="sections">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}
        className="max-w-[700px] mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8 flex flex-col items-center sm:items-start">
          <p className="capitalize text-2xl sm:text-4xl font-bold border-b-4 border-[#5E17EB] text-slate-200">
            Work
          </p>
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
          <div
            style={{
              backgroundImage: `url(${require("../assets/images/amazonclone.png")})`,
            }}
            className="shadow-lg shadow-[#5E17EB] group container rounded-md flex justify-center items-center mx-auto bg-no-repeat bg-cover h-[200px]"
          >
            {/* hover effects */}
            <div className="h-full w-full flex items-center opacity-0 justify-center group-hover:bg-[#5E17EB] group-hover:opacity-75 duration-300 rounded-lg">
              <div className="flex justify-between space-x-5">
                <a
                  href="https://github.com/moyoussef11/amazonclone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="p-1 bg-white text-[#5E17EB] rounded-full capitalize font-bold hover:text-white hover:bg-[#5E17EB] duration-300">
                    repo
                  </button>
                </a>
                <a
                  href="https://amazoncloneeee.netlify.app/"
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
          <div
            style={{
              backgroundImage: `url(${require("../assets/images/e-coomerce.png")})`,
            }}
            className="shadow-lg shadow-[#5E17EB] group container rounded-md flex justify-center items-center mx-auto bg-no-repeat bg-cover h-[200px]"
          >
            {/* hover effects */}
            <div className="h-full w-full flex items-center opacity-0 justify-center group-hover:bg-[#5E17EB] group-hover:opacity-75 duration-300 rounded-lg">
              <div className="flex justify-between space-x-5">
                <a
                  href="https://github.com/moyoussef11/simpleE-commerce"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="p-1 bg-white text-[#5E17EB] rounded-full capitalize font-bold hover:text-white hover:bg-[#5E17EB] duration-300">
                    repo
                  </button>
                </a>
                <a
                  href="https://65031d4f99943809aeba138a--relaxed-lamington-dff577.netlify.app/"
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
          <div
            style={{
              backgroundImage: `url(${require("../assets/images/restaurants.png")})`,
            }}
            className="shadow-lg shadow-[#5E17EB] group container rounded-md flex justify-center items-center mx-auto bg-no-repeat bg-cover h-[200px]"
          >
            {/* hover effects */}
            <div className="h-full w-full flex items-center opacity-0 justify-center group-hover:bg-[#5E17EB] group-hover:opacity-75 duration-300 rounded-lg">
              <div className="flex justify-between space-x-5">
                <a
                  href="https://github.com/moyoussef11/Restaurants"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="p-1 bg-white text-[#5E17EB] rounded-full capitalize font-bold hover:text-white hover:bg-[#5E17EB] duration-300">
                    repo
                  </button>
                </a>
                <a
                  href="https://graceful-manatee-dcee26.netlify.app/"
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
          <div
            style={{
              backgroundImage: `url(${require("../assets/images/roombooking.png")})`,
            }}
            className="shadow-lg shadow-[#5E17EB] group container rounded-md flex justify-center items-center mx-auto bg-no-repeat bg-cover h-[200px]"
          >
            {/* hover effects */}
            <div className="h-full w-full flex items-center opacity-0 justify-center group-hover:bg-[#5E17EB] group-hover:opacity-75 duration-300 rounded-lg">
              <div className="flex justify-between space-x-5">
                <a
                  href="https://github.com/moyoussef11/room-booking"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="p-1 bg-white text-[#5E17EB] rounded-full capitalize font-bold hover:text-white hover:bg-[#5E17EB] duration-300">
                    repo
                  </button>
                </a>
                <a
                  href="https://marvelous-smakager-4cb2e8.netlify.app/"
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
          <div
            style={{
              backgroundImage: `url(${require("../assets/images/libertyNET.png")})`,
            }}
            className="shadow-lg shadow-[#5E17EB] group container rounded-md flex justify-center items-center mx-auto bg-no-repeat bg-cover h-[200px]"
          >
            {/* hover effects */}
            <div className="h-full w-full flex items-center opacity-0 justify-center group-hover:bg-[#5E17EB] group-hover:opacity-75 duration-300 rounded-lg">
              <div className="flex justify-between space-x-5">
                <a
                  href="https://github.com/moyoussef11/LibertyNFTMarket"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="p-1 bg-white text-[#5E17EB] rounded-full capitalize font-bold hover:text-white hover:bg-[#5E17EB] duration-300">
                    repo
                  </button>
                </a>
                <a
                  href="https://moyoussef11.github.io/LibertyNFTMarket/"
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
          <div
            style={{
              backgroundImage: `url(${require("../assets/images/business.png")})`,
            }}
            className="shadow-lg shadow-[#5E17EB] group container rounded-md flex justify-center items-center mx-auto bg-no-repeat bg-cover h-[200px]"
          >
            {/* hover effects */}
            <div className="h-full w-full flex items-center opacity-0 justify-center group-hover:bg-[#5E17EB] group-hover:opacity-75 duration-300 rounded-lg">
              <div className="flex justify-between space-x-5">
                <a
                  href="https://github.com/moyoussef11/Business"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="p-1 bg-white text-[#5E17EB] rounded-full capitalize font-bold hover:text-white hover:bg-[#5E17EB] duration-300">
                    repo
                  </button>
                </a>
                <a
                  href="https://moyoussef11.github.io/Business/"
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
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
