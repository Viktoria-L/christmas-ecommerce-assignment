import { useLocation } from "react-router-dom";

const ProductInfo = () => {
  const productData = useLocation();
  console.log(productData.state.name);

  return (
    <div>ProductInfo</div>
  )
}

export default ProductInfo