import { Request, Response } from 'express';
import { productServices } from '../Services';

export class productController {
  public async getAllProducts(req: Request, res: Response) {
    const data = await productServices.getAllProducts();
    Array.isArray(data)
      ? res.status(200).json(data)
      : res.status(400).json(data);
  }

  public async addProduct(req: Request, res: Response) {
    res.status(200).json({ success: true });
  }

  public async updateProduct(req: Request, res: Response) {
    res.status(200).json({ success: true });
  }

  public async deleteProduct(req: Request, res: Response) {
    res.status(200).json({ success: true });
  }
}
