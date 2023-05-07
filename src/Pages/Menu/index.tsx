import { MenuSection } from "../../components";

// @ts-ignore
const Menu = ({foodItems, setFoodItems, cartItems, setCartItems}) => {

  // @ts-ignore
    return (
    <div className='flex w-full h-auto flex-col items-center justify-center'>
      <MenuSection foodItems={foodItems} setFoodItems={setFoodItems} cartItems={cartItems} setCartItems={setCartItems} />

    </div>
  );
}

export default Menu;
