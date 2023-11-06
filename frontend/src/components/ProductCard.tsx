import React from 'react';
import { Product } from '../models/products';
import { Link } from 'react-router-dom';
  
  // Props för komponenten
type Productcard = {
    product: Product;
}


const ProductCard: React.FC<Productcard> = ({product}) => {
  return (
    <div className="ecommerce-card min-w-[230px]">
      <Link to={`/product/${product.id}`} state={product}>
      <img src={product.image} alt={product.name} className='max-w-full h-56'/>
      <h3>{product.name}</h3></Link>
      <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard;