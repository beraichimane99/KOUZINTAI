import {motion} from 'framer-motion'
import { useStateValue } from '../../context/StateProvider';

const CartTotal = ({checkoutState}: {checkoutState:any}) => {
  const [{cartTotal}] = useStateValue();
  function getRecepies(params:string) {
    console.log(params);
    
    
  }
  return (
    <div className='w-full mt-auto rounded bg-cartItem rounded-t-[2rem] px-8 py-2 flex flex-col items-center justify-evenly'>
        <motion.button onClick={()=>getRecepies('test')} whileTap={{scale:0.8}} className='w-full mt-auto p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg'>
          Validate
        </motion.button>

    </div>
  )
}

export default CartTotal
