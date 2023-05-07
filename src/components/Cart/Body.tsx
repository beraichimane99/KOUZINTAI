import CartItem from './Item'
import CartTotal from './CartTotal'
import {useStateValue} from '../../context/StateProvider';
import {useEffect} from "react";

const CartBody = ({cartItems, setCartItems, action}: { cartItems: any, setCartItems:any, action: any }) => {
    // const [{cartItems}] = useStateValue();
    return (
        <div className='w-full h-full rounded-t-[2rem]  bg-cartBg flex flex-col'>
            <div className='w-full md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-hidden'>
                {
                    cartItems && cartItems.length > 0 && cartItems.map((item: any, index: number) => {
                        return <CartItem cartItems={cartItems} setCartItems={setCartItems} key={index} item={item}/>
                    })
                }
            </div>
            <CartTotal checkoutState={action}/>
        </div>
    )
}

export default CartBody
