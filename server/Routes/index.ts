import { Router } from 'express';
import productRouter from './product.route';
import cartRouter from './cart.route';
export type Route = {
  path: string;
  router: Router;
};
export const routers = [
  {
    path: '/products',
    router: productRouter,
  },
  {
    path: '/cart',
    router: cartRouter,
  },
];
