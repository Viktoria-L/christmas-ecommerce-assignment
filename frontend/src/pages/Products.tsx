
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
//import { Product } from '../components/ProductCard';
import axios from 'axios';



//Behöver typ göra om interface / type för den datan som kommer eller skicka in rätt data ?
type Product = {
  id: number;
  name: string;
  description: string;
}

const Products = () => {
  let products: Product[] = (useLoaderData() as Product[]) || [];

  console.log('produktdatan: ', products);

  return (
    <div>
      <h2>Productpage</h2>
      <div className='flex flex-wrap justify-center gap-8'>
        {products.length !== 0 ? products.map((product) => (
          <ProductCard key={product.id} product={product} />
          )) : (<div><h3>Sorry, something went wrong with the fetch. Cant display data</h3></div>)}
      </div>
    </div>
  );
}

export default Products;



//------------- Get All Products ----------------//


export const getAllProducts = async () => {
  console.log("nu anropas apiet");
  try {
    const response = await axios.get('http://localhost:3000/api/v1/products/list')
    return response.data.data;
  } catch(error) {
    console.log(error)
    return null;
  }
  

}

