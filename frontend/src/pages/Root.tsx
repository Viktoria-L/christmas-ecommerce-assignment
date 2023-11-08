import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ProductInfo } from "../models/productModels";

const Root = () => {

  let allProducts: ProductInfo[] = useLoaderData() as ProductInfo[];

  return (
    <div>
      <Navbar />
      <Outlet context={allProducts} />
    </div>
  )
}

export default Root