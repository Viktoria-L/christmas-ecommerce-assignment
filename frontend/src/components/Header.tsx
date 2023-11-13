import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from '../utils/context/cartContext';
import { useState } from 'react';
import ShoppingCart from "./ShoppingCart";


const Header = () => {

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const cartContext = useCart();
  if (!cartContext) {

    return null; 
  }
  const { cartState } = cartContext;
  const { myCart } = cartState;

  const cartItemCount: number = myCart.length;

  const toggleShoppingCart = () => setIsCartOpen(!isCartOpen);
  
  return (

    <header className="bg-rose-800">
        <div className="flex items-center justify-between p-4 shadow-lg">
                  <img
                    className="h-16 w-auto transform scale-x-[-1] rotate-[-25deg]"
                    src="/images/Elf-Hat-4.svg"
                    alt="Your Company"
                  />
                  <h1 className="font-mountain text-white text-4xl">Santa Sweet Delight</h1>
                  <button type="button" onClick={toggleShoppingCart} className="relative rounded-full bg-rose-800 p-1 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-700">
                    <span className="absolute -inset-1.5" />                  
                      <ShoppingCartIcon className="h-7 w-7" aria-hidden="true" />
                    <div className='absolute bg-gray-700 rounded-full px-1 text-white text-sm -top-1 -right-1'>
                      <span className=''>{cartItemCount}</span>
                    </div>
                </button>
                <ShoppingCart show={isCartOpen} onClose={toggleShoppingCart}>
                  <div className="mb-4 h-96 overflow-y-scroll">
                  {
                    myCart.length !== 0 ? (
                      myCart.map((product) => (
                        <div key={product.id} className="flex items-center p-4 border-b border-gray-200">
                          <img src={product.image} alt={product.name} className="w-20 h-20 object-cover mr-4 rounded-full" />
                          <div className="flex flex-col">
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-600 text-left">{`Pris: ${product.price} kr`}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <h3 className="text-center text-lg text-gray-600">You don't have any items in the cart yet...</h3>
                    )
                  }
                  </div>
                </ShoppingCart>
        </div>
    </header>
    
  )
}

export default Header