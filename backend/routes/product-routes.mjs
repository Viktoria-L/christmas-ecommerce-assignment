import express from 'express';
import { listProducts, getProduct } from '../controllers/product-controller.mjs';

const router = express.Router();
router.route('/list').get(listProducts);
// router.route('/search/:query').get(searchProducts);
router.route('/:id').get(getProduct);

export default router;