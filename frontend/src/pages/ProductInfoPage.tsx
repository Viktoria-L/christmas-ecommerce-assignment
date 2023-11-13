import { useOutletContext, useParams } from "react-router-dom";
import { ProductInfo } from "../models/productModels";
import { useState, useEffect, type ReactNode } from 'react';
import ProductDetail from "../components/ProductDetail";
import ErrorMessage from "../components/ErrorMessage";
import LoadingPage from "../components/LoadingPage";


const ProductInfoPage = () => {
    const [product, setProduct] = useState<ProductInfo>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string>();
    const { id } = useParams<{id:string}>();
    const allProducts = useOutletContext<ProductInfo[]>();
   
    useEffect(()=> {
        if(id){
            setIsLoading(true);
            const productId:number = Number(id);
            const findProduct = allProducts.find((p: ProductInfo) => p.id === productId);
            if(findProduct){
                setProduct(findProduct);
                setIsLoading(false);
            } else {
                setError("Could not find the product...")
                setIsLoading(false);
            }
        }
    },[id, allProducts]); 


    let content: ReactNode;

    if(error){
        content = <ErrorMessage text={error} />
    }
    if(isLoading){
        content = <LoadingPage text="Hold on..."/>
    }
    if(product){
       content = <ProductDetail product={product} />
    }
    

  return (
  <>
    {content}
  </>
  )
}

export default ProductInfoPage;