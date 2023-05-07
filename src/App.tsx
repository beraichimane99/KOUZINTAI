import "react-toastify/dist/ReactToastify.css";

import {
    About,
    Admin,
    Home,
    Login,
    Menu,
    Profile,
    Services,
    Signup,
} from "./Pages";
import {Cart, Footer, Header} from "./components";
import {Route, Routes} from "react-router-dom";
import {
    calculateCartTotal,
    dispatchUsers,
    fetchFoodData,
    fetchUserCartData,
    isAdmin,
} from "./utils/functions";

import {AnimatePresence} from "framer-motion";
import Contact from "./components/Contact";
import {ToastContainer} from "react-toastify";
import {useEffect, useState} from "react";
import {useStateValue} from "./context/StateProvider";

function App() {
    const [{showCart, showContactForm, user, adminMode}, dispatch] = useStateValue();

    const [foodItems, setFoodItems] = useState([
        {
            id: 1,
            type: "Vegetable",
            title: "Peppers",
            imageURL: "ingredients/Peppers.png"
        },
        {
            id: 2,
            type: "Vegetable",
            title: "Carrots",
            imageURL: "ingredients/Carrots.png"
        },
        {
            id: 3,
            type: "Vegetable",
            title: "Tomatoes",
            imageURL: "ingredients/Tomatoes.png"
        },
        {
            id: 4,
            type: "Vegetable",
            title: "Onions",
            imageURL: "ingredients/Onions.png"
        },
        {
            id: 5,
            type: "Vegetable",
            title: "Potatoes",
            imageURL: "ingredients/Potatoes.png"
        },
        {
            id: 6,
            type: "Vegetable",
            title: "Zucchini",
            imageURL: "ingredients/Zucchini.png"
        },
        {
            id: 7,
            type: "Vegetable",
            title: "Eggplant",
            imageURL: "ingredients/Eggplant.png"
        },
        {
            id: 8,
            type: "Vegetable",
            title: "Green beans",
            imageURL: "ingredients/Greenbeans.png"
        },
        {
            id: 9,
            type: "Vegetable",
            title: "Artichokes",
            imageURL: "ingredients/Artichokes.png"
        },
        {
            id: 10,
            type: "Vegetable",
            title: "Cabbage",
            imageURL: "ingredients/Cabbage.png"
        },
        {
            id: 11,
            type: "Vegetable",
            title: "Cauliflower",
            imageURL: "ingredients/Cauliflower.png"
        },
        {
            id: 12,
            type: "Vegetable",
            title: "Turnips",
            imageURL: "ingredients/Turnips.png"
        },
        {
            id: 13,
            type: "Vegetable",
            title: "Okra",
            imageURL: "ingredients/Okra.png"
        },
        {
            id: 14,
            type: "Vegetable",
            title: "Radishes",
            imageURL: "ingredients/Radishes.png"
        },
        {
            id: 15,
            type: "Vegetable",
            title: "Sweet potatoes",
            imageURL: "ingredients/Sweetpotatoes.png"
        },
        {
            id: 16,
            type: "Vegetable",
            title: "Pumpkin",
            imageURL: "ingredients/Pumpkin.png"
        },
        {
            id: 17,
            type: "Vegetable",
            title: "Spinach",
            imageURL: "ingredients/Spinach.png"
        },
        {
            id: 18,
            type: "Vegetable",
            title: "Beetroot",
            imageURL: "ingredients/Beetroot.png"
        },
        {
            id: 19,
            type: "Vegetable",
            title: "Fennel",
            imageURL: "ingredients/Fennel.png"
        },
        {
            id: 20,
            type: "Vegetable",
            title: "Cucumber",
            imageURL: "ingredients/Cucumber.png"
        },
        {
            id: 21,
            type: "Vegetable",
            title: "Garlic",
            imageURL: "ingredients/Garlic.png"
        },
        {
            id: 22,
            type: "Vegetable",
            title: "Cilantro",
            imageURL: "ingredients/Cilantro.png"
        },
        {
            id: 23,
            type: "Vegetable",
            title: "Parsley",
            imageURL: "ingredients/Parsley.png"
        },
        {
            id: 24,
            type: "Vegetable",
            title: "Green peas",
            imageURL: "ingredients/Greenpeas.png"
        },
        {
            id: 25,
            type: "Vegetable",
            title: "Celery",
            imageURL: "ingredients/Celery.png"
        },
        {
            id: 26,
            type: "Vegetable",
            title: "Leeks",
            imageURL: "ingredients/Leeks.png"
        },
        {
            id: 27,
            type: "Vegetable",
            title: "Turnip greens",
            imageURL: "ingredients/Turnipgreens.png"
        },
        {
            id: 28,
            type: "Vegetable",
            title: "Dandelion greens",
            imageURL: "ingredients/Dandeliongreens.png"
        },
        {
            id: 29,
            type: "Vegetable",
            title: "Watercress",
            imageURL: "ingredients/Watercress.png"
        },
        {
            id: 30,
            type: "Vegetable",
            title: "Swiss chard",
            imageURL: "ingredients/Swisschard.png"
        },
        {
            id: 31,
            type: "Vegetable",
            title: "Mustard greens ",
            imageURL: "ingredients/Mustardgreens.png"
        },
        {
            id: 32,
            type: "Vegetable",
            title: "Escarole",
            imageURL: "ingredients/Escarole.png"
        },
        {
            id: 33,
            type: "Vegetable",
            title: "Jerusalem artichoke",
            imageURL: "ingredients/Jerusalemartichoke.png"
        },
        {
            id: 34,
            type: "Vegetable",
            title: "Kohlrabi",
            imageURL: "ingredients/Kohlrabi.png"
        },
        {
            id: 35,
            type: "Vegetable",
            title: "Broccoli",
            imageURL: "ingredients/Broccoli.png"
        },
        {
            id: 36,
            type: "Vegetable",
            title: "Bell peppers",
            imageURL: "ingredients/Bellpeppers.png"
        },
        {
            id: 37,
            type: "Vegetable",
            title: "Mushrooms",
            imageURL: "ingredients/Mushrooms.png"
        },
        {
            id: 38,
            type: "Vegetable",
            title: "Green onions",
            imageURL: "ingredients/Greenonions.png"
        },
        {
            id: 39,
            type: "Vegetable",
            title: "Winter melon",
            imageURL: "ingredients/Wintermelon.png"
        },
        {
            id: 40,
            type: "Vegetable",
            title: "Fava beans",
            imageURL: "ingredients/Favabeans.png"
        },
        {
            id: 41,
            type: "Meat",
            title: "Beef",
            imageURL: "ingredients/Beef.png"
        },
        {
            id: 42,
            type: "Meat",
            title: "Chicken",
            imageURL: "ingredients/Chicken.png"
        },
        {
            id: 43,
            type: "Meat",
            title: "Camel",
            imageURL: "ingredients/Camel.png"
        },
        {
            id: 44,
            type: "Meat",
            title: "Pigeon",
            imageURL: "ingredients/Pigeon.png"
        },
        {
            id: 45,
            type: "Meat",
            title: "Sardines",
            imageURL: "ingredients/Sardines.png"
        },
        {
            id: 46,
            type: "Meat",
            title: "Rabbit",
            imageURL: "ingredients/Rabbit.png"
        },
        {
            id: 47,
            type: "Meat",
            title: "Goat",
            imageURL: "ingredients/Goat.png"
        },
        {
            id: 48,
            type: "Meat",
            title: "Sole",
            imageURL: "ingredients/Sole.png"
        },
        {
            id: 49,
            type: "Meat",
            title: "Swordfish",
            imageURL: "ingredients/Swordfish.png"
        },
        {
            id: 50,
            type: "Meat",
            title: "Mackerel",
            imageURL: "ingredients/Mackerel.png"
        },
        {
            id: 51,
            type: "Meat",
            title: "Shrimp",
            imageURL: "ingredients/Shrimp.png"
        },
        {
            id: 52,
            type: "Meat",
            title: "Calamar",
            imageURL: "ingredients/Calamar.png"
        },
        {
            id: 53,
            type: "Essentials",
            title: "Couscous",
            imageURL: "ingredients/Couscous.png"
        },
        {
            id: 51,
            type: "Essentials",
            title: "Olive oil",
            imageURL: "ingredients/Oliveoil.png"
        },
        {
            id: 52,
            type: "Essentials",
            title: "Lentilles",
            imageURL: "ingredients/Lentilles.png"
        }
    ]);
    const [cartItems, setCartItems] = useState([]);

    const menuProps = {foodItems, setFoodItems, cartItems, setCartItems}

    useEffect(() => {
        fetchFoodData(dispatch);
        dispatchUsers(dispatch);
        user && fetchUserCartData(user, dispatch);
    }, []);

    useEffect(() => {
        foodItems &&
        cartItems.length > 0 &&
        calculateCartTotal(cartItems, foodItems);
    }, [cartItems, foodItems, dispatch]);
    return (
        <AnimatePresence exitBeforeEnter>
            <ToastContainer/>
            <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-primary">
                {showCart && <Cart cartItems={cartItems} setCartItems={setCartItems}/>}
                {showContactForm && <Contact/>}
                {!(adminMode && isAdmin(user)) && <Header/>}
                <main
                    className={`${
                        !(adminMode && isAdmin(user)) &&
                    "mt-16 md:mt-16 px-3 md:px-8 md:py-6 py-4"
                    } w-full h-auto`}
                    onClick={() => {
                    }}
                >
                    {/* Routes */}
                    <Routes>
                        <Route path="/*" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Signup/>}/>
                        <Route path="/admin" element={<Admin/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/menu" element={<Menu {...menuProps}/>}/>
                        <Route path="/services" element={<Services/>}/>
                    </Routes>

                    {!(adminMode && isAdmin(user)) && <Footer/>}
                </main>
            </div>
        </AnimatePresence>
    );
}

export default App;
