import { ProductInfo } from "../models/productModels"
import { FC, useState } from 'react';
import { useCart } from "../utils/context/cartContext";

type ProductDetailProps = {
    product: ProductInfo;
}

const ProductDetail: FC<ProductDetailProps> = ({product}) => {
    const [count, setCount] = useState<number>(1);
    const cartContext = useCart(); 
    
    if (!cartContext) {
    return null;
    }
    const { dispatch } = cartContext;
    const addToCart = (product: ProductInfo) =>{
        for (let i = 0; i < count; i++) {
        dispatch({type: 'ADD_TO_CART', payload: product});
        }
    }

    const handleIncrement = () => {
        setCount(count + 1);
      };
    const handleDecrement = () => {
        if(count > 1){
            setCount(count - 1);
        }
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
       const input: number = Number(e.target.value);
        if(input >= 1){
        setCount(input);
        }        
    }
 
    return (
    <section className="sm:py-20 overflow-hidden bg-white">
    <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">            
            <div className="w-full px-4 md:w-1/2 ">
                <div className="sticky top-0 z-50 overflow-hidden ">
                    <div className="relative mb-6 lg:mb-10" style={{height:"450px"}}>
                        <img src={product.image} alt={product.name} className="object-contain w-full h-full" />
                    </div>
                    
                </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
                <div className="lg:pl-20">
                    <div className="pb-6 mb-8 border-b border-gray-200">
                      <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold md:text-4xl">
                            {product.name}
                        </h2>
                        <p className="max-w-md mb-8 text-gray-700">
                           {product.description}</p>
                        <div className="p-4 mb-8 border border-gray-300 rounded-2xl">
                              
                                <div className="mb-1 text-xs font-medium text-gray-700">
                                    Hurry up! Only {product.stock} left in Stock
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-red-600 dark:bg-red-400 h-2.5 rounded-full" style={{width:`${product.stock}%`}}>
                                    </div>
                                </div>
                            </div>
                        <p className="inline-block text-2xl font-semibold text-gray-700 ">
                            <span>{product.price} SEK</span>
                        </p>
                        <p className="block text-sm text-gray-700 ">
                            <span>{product.weight} g</span>
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start">
                        <div className="mb-4 mr-4 lg:mb-0">
                            <div className="w-28">
                                <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                    <button onClick={handleDecrement} className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer  hover:text-gray-700  hover:bg-gray-300">
                                        <span className="m-auto text-2xl font-thin">-</span>
                                    </button>
                                    <input type="text" className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none   focus:outline-none text-md hover:text-black"
                                       value={count} onChange={handleInputChange} />
                                    <button onClick={handleIncrement} className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-300">
                                        <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 mr-4 lg:mb-0">
                            <button onClick={()=> addToCart(product)} className="btn-primary">
                                Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    </section>
  )
}

export default ProductDetail;