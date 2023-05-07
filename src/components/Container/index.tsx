import { useLayoutEffect, useRef } from "react";

import { FoodItem } from "../../../types";
import Loader from "../Loader";
import { SingleFoodItem } from "../FoodItem";
import { motion } from "framer-motion";
import NotFound from "../NotFound";
import { isAdmin } from "../../utils/functions";
import { useStateValue } from "../../context/StateProvider";

const Container = ({scrollOffset, col, foodItems, className, setFoodItems, cartItems, setCartItems }: {scrollOffset:number, col?: boolean; foodItems: any[], className?:string, setFoodItems: any, cartItems: any, setCartItems: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if(null !== containerRef.current){
      containerRef.current.scrollLeft += scrollOffset
    }
  }, [scrollOffset]);
  const [{user}, dispatch] = useStateValue();
  return (
    <motion.div
      ref = {containerRef}
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className={`${className} w-full my-12 flex foodItems-center ${(!foodItems || col) && "justify-center"}   min-h-[200px] gap-4  px-2 ${
        !col ? "overflow-x-scroll scrollbar-hidden scroll-smooth" : "overflow-x-hidden flex-wrap"
      }`}
    >
      {foodItems  && foodItems.map((item: FoodItem) => (
        <SingleFoodItem key={item.id} item={item} foodItems={foodItems} cartItems={cartItems} setCartItems={setCartItems} col={col} admin={isAdmin(user)}/>
      ))}
      {
        !foodItems && (!col ? (<Loader progress = {"Fetching Food Items....."} />): (<NotFound text="Fetching Food Items..."  />))
      }
      {
        foodItems && foodItems.length <= 0 &&  (<NotFound text="No Food Items Available "  />)
      }
    </motion.div>
  );
};

export default Container;
