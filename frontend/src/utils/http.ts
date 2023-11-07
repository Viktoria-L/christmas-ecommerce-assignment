import { state } from './state';
import axios from 'axios';
import { ProductInfo, ProductData } from '../models/productModels';

//------------- Get All Products ----------------//

export const getAllProducts = async ():  Promise<ProductData | null> => {
    console.log("nu anropas apiet");
    const API_URL = state.api.baseUrl;
    //let url: string = '';

    try {
      const response = await axios.get(`${API_URL}products/list`)
      return response.data.data;
    } catch(error) {
      console.log(error)
      return null;
    }
  }


  export const getProduct = async ({ params }) => {
    console.log("nu anropas produktapiet", params);

    const API_URL = state.api.baseUrl;
    
    try {
      const response = await axios.get(`${API_URL}products/${params}`)
      return response.data.data;
    } catch(error) {
      console.log("Fetch-error", error)
      return null;
    }
}

//Nedanför från movieflixövning
//   const fetchData = async (endpoint: string, page = 1, criteria?: string): Promise<Response> => {
//     const API_URL = state.api.baseUrl;
  
//     let url: string = '';
  
//     if (criteria) {
//       url = `${API_URL}${endpoint}/${criteria}&page=${page}`;
//     } else {
//       url = `${API_URL}${endpoint}?page=${page}`;
//     }
  
//     const response = await fetch(url);
  
//     return response;
//   };
  
//   export default fetchData;
  