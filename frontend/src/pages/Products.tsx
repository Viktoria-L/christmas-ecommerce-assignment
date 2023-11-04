import { useLoaderData } from "react-router-dom";

const Products = () => {

  const products = useLoaderData();

console.log("produktdatan: ", products)
  return (
    <div>
      <h2>Productpage</h2>
      {/* {products.map((product))} */}

    </div>
  )
}

export default Products;

export const getAllProducts = async () => {
  console.log("nu anropas apiet");
  let response = await fetch('http://localhost:3001/api/v1/products/list');
  let data = await response.json();
  return data;

}

