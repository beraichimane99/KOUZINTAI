import {useEffect, useState} from "react";

import Container from "../../Container";
import {FilterFood} from "../../../utils/filters";
import Filters from "../../Filters";
import {Title} from "..";
import {useStateValue} from "../../../context/StateProvider";

// @ts-ignore
const Menu = ({foodItems, setFoodItems, cartItems, setCartItems}) => {

    const [scrollValue, setScrollValue] = useState(0);
    // const [{ foodItems }, dispatch] = useStateValue();

    const [filter, setFilter] = useState<string>("all");

    return (
        <section className="w-full my-5" id="menu">
            <div className="w-full flex items-center justify-center">
                <Title title="Select Your ingredients" center/>
            </div>
            <Filters filter={filter} setFilter={setFilter}/>
            <Container
                className="bg-containerbg"
                col
                scrollOffset={scrollValue}
                foodItems={filter === "all" ? foodItems : FilterFood(filter, foodItems)}
                // foodItems={foodItems}
                setFoodItems={setFoodItems}
                cartItems={cartItems}
                setCartItems={setCartItems}
            />
        </section>
    );
};

export default Menu;
