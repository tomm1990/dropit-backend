import { Request, Response } from 'express';
import { getAllProducts, createNewProduct, readProductById } from '../services/productService';
import { Product } from '../models/productModel';

const handleError = (res: Response, statusCode: number, message: string, error?: unknown) => {
  console.error(message, error);
  res.status(statusCode).json({ message });
};

export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const items = await getAllProducts();
    res.status(200).json(items);
  } catch (error) {
    handleError(res, 500, 'Failed to fetch products.', error);
  }
};

export const createProduct = async (req: Request<{}, {}, { product: Product }>, res: Response): Promise<void> => {
  const { product } = req.body;

  if (!product) {
    return handleError(res, 400, 'Product data is required.');
  }

  try {
    const createdProduct = await createNewProduct(product);
    res.status(201).json(createdProduct);
  } catch (error) {
    handleError(res, 500, 'Failed to create product.', error);
  }
};

export const getProductById = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return handleError(res, 400, 'Invalid product ID.');
  }

  try {
    const product = await readProductById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found.' });
    }
  } catch (error) {
    handleError(res, 500, 'Failed to fetch product by ID.', error);
  }
};
