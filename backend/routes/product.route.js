import express from 'express';
import { getAllProducts, createProduct, updateProduct, deleteProduct, getProductId } from '../controller/product.controller.js';
import { get } from 'mongoose';

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/:id', getProductId);

export default router;