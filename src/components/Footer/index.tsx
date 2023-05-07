import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Assets";
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsDribbble,
} from "react-icons/bs";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="p-4 bg-primary sm:p-6 w-full">
      
      <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between ">
  <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
    © 2022 KONZINTAI™. All Rights Reserved.
  </span>        
</div>

    </footer>
  );
};

export default Footer;
