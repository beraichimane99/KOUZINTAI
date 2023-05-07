import React from "react";
import { BikeDelivery } from "../Assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Left = () => {
  return (
    <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
      {/* <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
        <p className="text-base text-orange-500 font-bold">test Delivery</p>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
          <img
            src={BikeDelivery}
            alt="delivery"
            className="w-full h-full object-contain"
          />
        </div>
      </div> */}
      
      <p className="text-[2rem] lg:text-[1.5rem] font-bold tracking-wide text-headingColor">
      Transform your kitchen ingredients into delicious meals using AI.
     
      </p>
      <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
      This web application allows users to give ingredients they have in their kitchen to the app and get recipe suggestions based on those ingredients.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
      >
        
        <Link to={'/menu'}>Get Started</Link>
      </motion.button>
    </div>
  );
};

export default Left;
