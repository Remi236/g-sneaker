import { Router } from 'express';

import { cartController } from '../Controllers';

const cartRouter = Router();
const controller = new cartController();

//Get a list of all carts
cartRouter.get('/', controller.getAllCart);

//Create a new cart
cartRouter.post('/', controller.addItemToCart);

//Update a cart
cartRouter.put('/:id', controller.updateItemQuantity);

//Delete a cart
cartRouter.delete('/:id', controller.removeItemFromCart);

export default cartRouter;
