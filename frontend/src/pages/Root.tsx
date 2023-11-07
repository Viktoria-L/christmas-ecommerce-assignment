import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Product } from "../models/productModels";

const Root = () => {

  let allProducts: Product[] = useLoaderData() as Product[];
console.log("från root", allProducts)

  return (
    <div>
      <Navbar />
      <Outlet context={allProducts} />
    </div>
  )
}

export default Root