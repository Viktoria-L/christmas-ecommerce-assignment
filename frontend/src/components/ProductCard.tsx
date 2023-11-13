import { FC }from 'react';
import { ProductInfo } from '../models/productModels';
import { Link } from 'react-router-dom';
import { useCart } from '../utils/context/cartContext';

type Productcard = {
    product: ProductInfo;
}

const ProductCard: FC<Productcard> = ({product}: Productcard) => {
    const cartContext = useCart(); 

    if (!cartContext) {
      return null;
    }
    const { dispatch } = cartContext;

    const addToCart = (product: ProductInfo) =>{
      dispatch({type: 'ADD_TO_CART', payload: product});
    }

  return (
    <div className="flex flex-col justify-between gap-2 mb-6">
      <Link to={`/product/${product.id}`} state={product}>      
        <img src={product.image} alt={product.name} className='object-cover w-56 h-56 max-w-56 max-h-56 rounded-sm shadow-md'/>
        <h3 className='font-semibold mt-3'>{product.name}</h3>
      </Link>
      <button onClick={()=> addToCart(product)} className='btn-primary'>Add to Cart</button>
    </div>
  )
}

export default ProductCard;