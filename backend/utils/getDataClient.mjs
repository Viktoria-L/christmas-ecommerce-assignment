import products from '../data/products.mjs';

const fetchData = (endpoint) => {
    let data;
    const response = {
        status: "Not found",
        statusCode: 404,
        data: null,
        error: null,
    };

    try {
        if(typeof endpoint === 'number'){
           const product = products.find(product => product.id === parseInt(endpoint));
           if(product !== undefined){
               data = product;
               response.status = 'Success';
               response.statusCode = 200;
               response.data = data;
           }
           if(product === undefined) {
              response.error = 'Could not find the product';
           }
        } else {
          data = products; 
          response.status = 'Success';
          response.statusCode = 200;
          response.data = data;
        }
      } catch (error) {
        response.error = 'Could not find any products';
      }
    
      return response;
};

export default fetchData;

