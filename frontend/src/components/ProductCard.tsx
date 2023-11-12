import { FC }from 'react';
import { ProductInfo } from '../models/productModels';
import { Link } from 'react-router-dom';
import { useCart } from '../utils/context/cartContext';

// Props för komponenten
type Productcard = {
    product: ProductInfo;
}

const ProductCard: FC<Productcard> = ({product}: Productcard) => {
const cartContext = useCart(); 

if (!cartContext) {
  // Om context är undefined
  return null; // eller visa ett alternativt innehåll
}
const { dispatch } = cartContext;

const addToCart = (product: ProductInfo) =>{
  dispatch({type: 'ADD_TO_CART', payload: product});
}

  return (
    <div className="ecommerce-card flex flex-col justify-between">
      <Link to={`/product/${product.id}`} state={product}>
      
      <img src={product.image} alt={product.name} className='object-cover w-56 h-56 max-w-56 max-h-56'/>

      <h3>{product.name}</h3></Link>
      <button onClick={()=> addToCart(product)} className='btn-primary'>Add to Cart</button>
    </div>
  )
}

export default ProductCard;