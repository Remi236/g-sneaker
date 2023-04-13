export type ActionResponse = {
  success: boolean;
  message?: string;
};

type DataActionResponse = ActionResponse | undefined;

export { DataActionResponse };

export * from './database.model';
export * from './product.model';
export * from './cart.model';
