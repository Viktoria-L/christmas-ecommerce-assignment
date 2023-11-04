import products from '../data/products.mjs';



//Kanske ta bort page? för jag lär ju inte ha flera sidor av prdukter?

const fetchData = (endpoint, page=1, query=null) => {
    let data;
    const response = {
        status: "Not found",
        statusCode: 404,
        data: null,
        error: null,
    };
    console.log("endpoint", endpoint)

    //Om jag inte har en sök behövs inte query,
    // if(query){
    //    // url += `&query=${query}`;
    // }

    try {
        //kolla om det är inskickat ett id för isf sätt datan till produkten med det id
        if(typeof endpoint === 'number'){
           const product = products.find(product => product.id === parseInt(endpoint));
           if(product !== undefined){
               data = product;
               console.log("här är datan", data);
               response.status = 'Success';
               response.statusCode = 200;
               response.data = data;
           }
           if(product === undefined) {
            response.error = 'Could not find the product';
           }
        } else {
        data = products; 
        console.log("här är datan", data);
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

