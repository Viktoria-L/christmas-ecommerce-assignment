import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import products from './routes/product-routes.mjs';
dotenv.config({path: './config/.env'});

const app = express();

// --------- MIDDLEWARE --------- //
app.use(cors()); 
app.use('/api/v1/products', products);
app.use(express.static('public')); 
// ------------------------------ //

const PORT = 3000;

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))