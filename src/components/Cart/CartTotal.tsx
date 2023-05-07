import {motion} from 'framer-motion'
import { useStateValue } from '../../context/StateProvider';
import { Link } from 'react-router-dom';

const CartTotal = ({checkoutState}: {checkoutState:any}) => {
  const [{cartTotal}] = useStateValue();
  return (
    <div className='w-full mt-auto rounded bg-cartItem rounded-t-[2rem] px-8 py-2 flex flex-col items-center justify-evenly'>
        <motion.button onClick = {() => alert("go to recepies pages")} whileTap={{scale:0.8}} className='w-full mt-auto p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg'>
        <Link to={'/services'}>Validate</Link>
        </motion.button>

    </div>
  )
}

export default CartTotal
