import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className=" h-[40vh] bg-slate-900 py-6">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <div className="w-full flex flex-row items-center justify-center list-none gap-4 md:gap-6">
          <li className="text-white text-[10px] md:text-base font-semibold cursor-pointer">
            Terms of Use
          </li>
          <li className="text-white text-[10px] md:text-base font-semibold cursor-pointer">
            Privacy Policy
          </li>
          <li className="text-white text-[10px] md:text-base font-semibold cursor-pointer">
            About
          </li>
          <li className="text-white text-[10px] md:text-base font-semibold cursor-pointer">
            Blog
          </li>
          <li className="text-white text-[10px] md:text-base font-semibold cursor-pointer">
            FAQ
          </li>
        </div>
        <div className="text-center font-light text-white text-[12px] md:text-base px-4 md:px-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet
          rerum maiores distinctio ad. Dicta, molestiae commodi facere odio
          facilis necessitatibus quia architecto, nesciunt ullam error nostrum
          iure ea. Dolorum aliquid, blanditiis unde recusandae iusto accusantium
          reprehenderit corrupti odit!
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="bg-slate-950 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
            <FaFacebookF size={15} className="text-white" />
          </div>
          <div className="bg-slate-950 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
            <FiTwitter size={15} className="text-white" />
          </div>
          <div className="bg-slate-950 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
            <FaInstagram size={15} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
