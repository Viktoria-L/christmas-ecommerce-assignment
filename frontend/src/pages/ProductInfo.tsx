import { useLocation } from "react-router-dom";
import { Product } from "../models/products";
import React from "react";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const location = useLocation();
  product = location.state;

  console.log(product);

  return (
    <div>ProductInfo</div>
  )
}

export default ProductInfo