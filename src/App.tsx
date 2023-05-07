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
import { Cart, Footer, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import {
  calculateCartTotal,
  dispatchUsers,
  fetchFoodData,
  fetchUserCartData,
  isAdmin,
} from "./utils/functions";

import { AnimatePresence } from "framer-motion";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import {useEffect, useState} from "react";
import { useStateValue } from "./context/StateProvider";

function App() {
  const [{ showCart,showContactForm, user, adminMode }, dispatch] = useStateValue();

  const [foodItems, setFoodItems] = useState([
    {id: 1, title: "test1", type: "Vegetable", imageURL : "ingredients/Carrots.png"},
    {id: 2, title: "test1", type: "Vegetable", imageURL : "ingredients/Onions.png"},
    {id: 3, title: "test1", type: "Vegetable", imageURL : "ingredients/Peppers.png"},
    {id: 4, title: "test1", type: "Vegetable", imageURL : "ingredients/Potatoes.png"},
    {id: 5, title: "test1", type: "Vegetable", imageURL : "ingredients/Tomatoes.png"},
    {id: 6, title: "test1", type: "Vegetable", imageURL : "ingredients/Zucchini.png"},
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
      <ToastContainer />
      <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-primary">
        {showCart && <Cart cartItems={cartItems} setCartItems={setCartItems} />}
        {showContactForm && <Contact />}
        {!(adminMode && isAdmin(user)) && <Header />}
        <main
          className={`${
            !(adminMode && isAdmin(user)) &&
            "mt-16 md:mt-16 px-3 md:px-8 md:py-6 py-4"
          } w-full h-auto`}
          onClick={() => {}}
        >
          {/* Routes */}
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu {...menuProps}/>} />
            <Route path="/services" element={<Services />} />
          </Routes>

          {!(adminMode && isAdmin(user)) && <Footer />}
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
