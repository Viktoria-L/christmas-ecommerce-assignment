import { useLocation } from "react-router-dom";
// import { Product } from "../models/products";


// interface ProductInfoProps {
//   product: Product;
// }

const ProductInfo = () => {
  const location = useLocation();
  const product = location.state;

  console.log(product);

  return (
    <div>ProductInfo
      <img src={product.image}/>
    </div>
  )
}

export default ProductInfo