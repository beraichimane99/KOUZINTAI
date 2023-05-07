import {GiFruitTree, GiChickenOven, GiBeerBottle, GiBowlOfRice, GiCarrot, GiDrinking} from "react-icons/gi";
import { MdOutlineIcecream } from "react-icons/md";
import {FaFish} from "react-icons/fa";

export const Categories = [
    {
        id: 1,
        name: "Meat",
        urlParam: 'meat',
        icon: <GiChickenOven />,
    },
    {
        id: 2,
        name: "Vegetables",
        urlParam: 'vegetables',
        icon: <GiCarrot />,
    },
    {
        id: 3,
        name: "Essentials",
        urlParam: 'essentials',
        icon: <GiDrinking />,
    }
]
