import { db } from './database.model';
import { DataActionResponse } from './';
export type Cart = {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
  quantity: number;
};
export type CartType = {
  total: number;
  items: Array<Cart>;
};
export type CartResponse = CartType | DataActionResponse | null;
export const cartModel = db.get('cart');
