import express from 'express';
import { listProducts, getProduct } from '../controllers/product-controller.mjs';

const router = express.Router();
router.route('/list').get(listProducts);
router.route('/:id').get(getProduct);

export default router;