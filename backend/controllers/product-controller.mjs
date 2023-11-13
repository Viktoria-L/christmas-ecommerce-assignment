import getDataClient from '../utils/getDataClient.mjs';
import products from '../data/products.mjs';

const listProducts =  (req,res) => {
    const page = req.query.page !== undefined ? req.query.page : 1;
    const response = getDataClient('list products', page);
    res.status(response.statusCode).json(response);
}

const getProduct = (req,res) => {
    if (req.params.id === undefined) {
        res.status(400).json({ success: false, message: 'Bad request, productid is missing' });
        return;
      }
      
    const id = req.params.id;
    const product = products.find(product => product.id === parseInt(id));

    const response = getDataClient(Number(id));
    res.status(response.statusCode).json(response);
    
}

export { listProducts, getProduct }

