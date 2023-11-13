import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from '../utils/context/cartContext';


const Header = () => {

  const cartContext = useCart();
  if (!cartContext) {
    // Om context är undefined
    return null; // eller visa ett alternativt innehåll
  }
  const { cartState } = cartContext;
  const { myCart } = cartState;
  //const {dispatch} = cartContext;

  // Beräkna antalet produkter i varukorgen
  const cartItemCount: number = myCart.length;
  console.log("varor i korgen", cartItemCount)
  console.log("produkter i korgen", myCart)
  
  return (

    <header className="bg-rose-800">
        <div className="flex items-center justify-between p-4 border-b-2 border-rose-900 shadow-lg">
                  <img
                    className="h-12 w-auto"
                    src="/images/Elf-Hat-4.svg"
                    alt="Your Company"
                  />
                  <h1 className="font-mountain text-white text-3xl">Santa Sweet Delight</h1>
                  <button
                  type="button"
                  className="relative rounded-full bg-rose-800 p-1 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-700"
                >
                  <span className="absolute -inset-1.5" />
                  
                  <ShoppingCartIcon className="h-7 w-7" aria-hidden="true" />
                  <div className='absolute bg-gray-700 rounded-full px-1 text-white text-sm -top-1 -right-1'>
                  <span className=''>{cartItemCount}</span>
                  </div>
                </button>
        </div>
    </header>
    
  )
}

export default Header