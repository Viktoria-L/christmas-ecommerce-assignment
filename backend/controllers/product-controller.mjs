import getDataClient from '../utils/getDataClient.mjs';
import products from '../data/products.mjs';

const listProducts =  (req,res) => {
    const page = req.query.page !== undefined ? req.query.page : 1;
    const response = getDataClient('list products', page);
    console.log("list", response)
    res.status(response.statusCode).json(response);
}

//Behövs ens en sök?
// const searchProducts = async (req,res) => {
//     //const page = req.query.page !== undefined ? req.query.page : 1;
//     const query = req.params.query;
//     const response = await httpClient('search/product', query);
//     console.log("sök", response)

//     res.status(response.statusCode).json(response);

// }


const getProduct = (req,res) => {
    if (req.params.id === undefined) {
        res.status(400).json({ success: false, message: 'Bad request, productid is missing' });
        return;
      }
      
    const id = req.params.id;
    //Behöver denna product ens vara med längre om den finns i fetchdata?
    const product = products.find(product => product.id === parseInt(id));
    console.log("här är produkten", product)
    // Kalla fetchData med den hittade produkten som data
    //const response = await httpClient('get product', product);
    const response = getDataClient(Number(id));
    console.log("get", response)
    console.log('Status code:', response.statusCode);

    res.status(response.statusCode).json(response);
    
}

export { listProducts, getProduct }

