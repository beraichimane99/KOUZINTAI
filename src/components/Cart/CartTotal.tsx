import {motion} from 'framer-motion'
import { useStateValue } from '../../context/StateProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CartTotal = ({checkoutState,cartItems}: {checkoutState:any,cartItems:any}) => {
  const [{cartTotal}] = useStateValue();
  async function getRecepies(params:string) {
    console.log(cartItems);
    let ingredients=""
    console.log(typeof checkoutState);
    
    cartItems.forEach((element:any) => {
      ingredients=ingredients+element.title+', '
    });
    
    // make HTTP GET request to a JSON API endpoint
  await axios.post('http://10.32.117.226:5000/', {"ingredients":ingredients}, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    // handle response data
    console.log(response.data);
  })
  .catch(error => {
    // handle error
    console.error(error);
  });
    
  }
  return (
    <div className='w-full mt-auto rounded bg-cartItem rounded-t-[2rem] px-8 py-2 flex flex-col items-center justify-evenly'>
        <motion.button onClick={()=>getRecepies('test')} whileTap={{scale:0.8}} className='w-full mt-auto p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg'>
          Validate
        <Link to={'/services'}>Validate</Link>
        </motion.button>

    </div>
  )
}

export default CartTotal
