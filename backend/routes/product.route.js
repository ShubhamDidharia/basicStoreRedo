import express from 'express';
import { getAllProducts, createProduct, updateProduct, deleteProduct } from '../controller/product.controller.js';

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;