import { Router } from 'express';

import { productController } from '../Controllers';

const productRouter = Router();
const controller = new productController();

//Get a list of all products
productRouter.get('/', controller.getAllProducts);

//Create a new product
productRouter.post('/', controller.addProduct);

//Update a product
productRouter.put('/:id', controller.updateProduct);

//Delete a product
productRouter.delete('/:id', controller.deleteProduct);

export default productRouter;
