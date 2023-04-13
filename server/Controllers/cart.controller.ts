import { Request, Response } from 'express';
import { cartServices } from '../Services';

export class cartController {
  public async getAllCart(req: Request, res: Response) {
    const data = await cartServices.getAllCart();
    data.hasOwnProperty('message')
      ? res.status(400).json(data)
      : res.status(200).json(data);
  }

  public async addItemToCart(req: Request, res: Response) {
    const data = await cartServices.addCartItem(req.body);
    data.hasOwnProperty('message')
      ? res.status(400).json(data)
      : res.status(200).json(data);
  }

  public async removeItemFromCart(req: Request, res: Response) {
    const data = await cartServices.removeCartItem(+req.params.id);
    data.hasOwnProperty('message')
      ? res.status(400).json(data)
      : res.status(200).json(data);
  }

  public async updateItemQuantity(req: Request, res: Response) {
    const data = await cartServices.updateCartItem(req.body);
    data.hasOwnProperty('message')
      ? res.status(400).json(data)
      : res.status(200).json(data);
  }
}
