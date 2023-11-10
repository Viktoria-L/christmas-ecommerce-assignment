import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ProductInfo } from "../models/productModels";
import Header from "../components/Header";

const Root = () => {

  let allProducts: ProductInfo[] = useLoaderData() as ProductInfo[];

  return (
    <div>
      <Header />     
      <Navbar />
      <Outlet context={allProducts} />
    </div>
  )
}

export default Root