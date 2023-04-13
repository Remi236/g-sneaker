import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { Product, CartType } from './';

export type StoreType = {
  cart: CartType;
  products: Array<Product>;
  [key: string]: CartType | Array<Product>;
};

const adapter = new FileSync<StoreType>('db.json');
export const db = low(adapter);
