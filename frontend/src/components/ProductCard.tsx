import React from 'react';
import { ProductInfo } from '../models/productModels';
import { Link } from 'react-router-dom';
  
  // Props för komponenten
type Productcard = {
    product: ProductInfo;
}


const ProductCard: React.FC<Productcard> = ({product}) => {
  return (
    <div className="ecommerce-card flex flex-col justify-between">
      <Link to={`/product/${product.id}`} state={product}>
      
      <img src={product.image} alt={product.name} className='object-cover w-56 h-56 max-w-56 max-h-56'/>

      <h3>{product.name}</h3></Link>
      <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard;