import { Router } from 'express';
import { getProducts, createProduct, getProductById } from '../controllers/productController';

const router = Router();

router.get('/products', getProducts);
router.post('/products', createProduct);
router.get('/products/:id', getProductById);

export default router;
