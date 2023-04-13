import { db } from './database.model';
import { DataActionResponse } from './';
export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  color: string;
};
export type ProductResponse = Product | DataActionResponse | null;
export type ProductsResponse = Product[] | DataActionResponse | undefined;
export const productModel = db.get('products');
