import { productModel, ProductsResponse } from '../Models';

export const productServices = {
  getAllProducts: async () => {
    let data: ProductsResponse;
    try {
      data = await productModel.value();
    } catch (err) {
      console.log(err);
      data = { success: false, message: String(err) };
    }
    return data;
  },
};
