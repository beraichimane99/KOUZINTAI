import { motion } from "framer-motion";

const RecipeCard = ({ title, desc }: { title: string, desc: string }) => {
  return (
    <div className="cursor-pointer min-h-[280px] lg:min-h-[350px] min-w-[320px] lg:min-w-[400px] drop-shadow-lg p-2 bg-cardOverlay backdrop-blur-md rounded-xl flex flex-col items-center justify-center">
     
      <p className="text-base lg:text-lg font-semibold text-textColor">Title : {title}</p>
      <p className="text-[10px] lg:text-lg text-lightGray font-semibold my-2 lg:my-3"> Description{desc}</p>
    </div>
  );
};

export default RecipeCard;
