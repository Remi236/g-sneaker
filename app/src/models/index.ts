export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  color: string;
  isAddedToCart?: boolean;
};
export type Cart = {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
  quantity: number;
  isAddedToCart?: boolean;
};

export type CartType = {
  total: number;
  items: Array<Cart>;
};

export type StoreType = {
  cart: CartType;
  products: Array<Product>;
  [key: string]: CartType | Array<Product>;
};

export const storeDefault: StoreType = {
  cart: {
    total: 0,
    items: [],
  },
  products: [],
};

export type DataContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  store: StoreType;
  setStore: React.Dispatch<React.SetStateAction<StoreType>>;
  productSelector: Product[];
  cartSelector: CartType;
  addItem: (itemAdd: Product | Cart, selector: string) => Promise<void>;
  editItem: (itemEdit: Product | Cart, selector: string) => Promise<void>;
  deleteItem: (itemDelete: Product | Cart, selector: string) => Promise<void>;
  loadProducts: () => Promise<void>;
  loadCarts: () => Promise<void>;
};

export enum SelectorEnum {
  PRODUCTS = 'products',
  CART = 'cart',
}
