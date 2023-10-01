import React from 'react';
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillFacebook,
} from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
      <div className="bg-[#202124] py-3">
        <ul className="flex items-center justify-center space-x-5">
          <li>
            <a
              href="https://www.linkedin.com/in/mohamed-youssef11/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full hover:scale-150 duration-300"
            >
              <BsLinkedin size={30} color="#0A66C2" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/moyoussef11?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full hover:scale-150 duration-300"
            >
              <AiFillGithub size={30} color="#fff" />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=201146646254&app=facebook&entry_point=page_cta"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full hover:scale-150 duration-300"
            >
              <AiOutlineWhatsApp size={30} color="#53EE6E" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100038189556961"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-full hover:scale-150 duration-300"
            >
              <AiFillFacebook size={30} color="#0866FF" />
            </a>
          </li>
        </ul>
        <p className="text-center font-bold text-white mt-2">
          Mohame<span className="text-[#5E17EB]">d Y</span>oussef
        </p>
      </div>
    );
};
export default Footer;