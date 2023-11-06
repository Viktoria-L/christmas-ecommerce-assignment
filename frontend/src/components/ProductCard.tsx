import React from 'react';


// Skapa ett gränssnitt för produkten
// export interface Product {
//     id: number;
//     name: string;
//     description: string;
//   }
  
  // Props för komponenten
type Productcard = {
    product: Product;
}


const ProductCard: React.FC<Productcard> = ({product}) => {
  return (
    <div className="ecommerce-card min-w-[230px]">
      <img src={product.image} alt={product.name} className='max-w-full h-56'/>
      <h3>{product.name}</h3>
      <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard