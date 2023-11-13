import { state } from './state';
import axios from 'axios';
import { ProductData } from '../models/productModels';

//------------- Get All Products ----------------//

export const getAllProducts = async ():  Promise<ProductData[] | null> => {
    const API_URL: string = state.api.baseUrl;
    try {
      const response = await axios.get(`${API_URL}products/list`)
      return response.data.data;
    } catch(error) {
      console.log(error)
      return null;
    }
  }
