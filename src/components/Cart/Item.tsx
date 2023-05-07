import {BiMinus, BiPlus} from "react-icons/bi";

import {MdDelete} from "react-icons/md";
import {motion} from "framer-motion";
import {cartItem} from "../../../types";
import {deleteCartItem, getFoodyById, updateCartItemQty} from "../../utils/functions";
import {useStateValue} from "../../context/StateProvider";

const CartItem = ({cartItems, setCartItems, item}: { cartItems:any, setCartItems:any, item: any }) => {
    const [{ user }, dispatch] = useStateValue();
    const {id, fid, qty} = item;

    return (
        <div
            className="w-full p-1 px-2 rounded-lg bg-cartItem hover:shadow-md flex items-center justify-between gap-2 cursor-pointer ">
            <div className=" flex items-center  gap-2">
                <img
                    src={item?.imageURL}
                    alt=""
                    className="w-20 h-20 max-w-[60px] rounded-full object-contain"
                />

                <div className="flex flex-col gap-0 ">
                    <p className="text-base text-gray-50">{item?.title}</p>
                </div>
            </div>

            <motion.div
                whileTap={{scale: 0.75}}
                className="text-sm text-gray-50 w-6 h-6 rounded-lg bg-cartNumBg flex items-center justify-center"
                onClick={() => deleteCartItem(cartItems, setCartItems, item, dispatch)}
            >
                <MdDelete/>
            </motion.div>
        </div>
    );
};

export default CartItem;
