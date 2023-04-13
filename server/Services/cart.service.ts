import { Cart, cartModel, CartResponse } from '../Models';

export const cartServices = {
  getAllCart: async () => {
    let data: CartResponse;
    try {
      data = await cartModel.value();
    } catch (err) {
      console.log(err);
      data = { success: false, message: String(err) };
    }
    return data;
  },

  addCartItem: async (item: Cart) => {
    let data: CartResponse;
    try {
      await cartModel.get('items').push(item).write();
      const items = await cartModel.get('items').value();
      const total = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      await cartModel.set('total', total).write();
      data = { success: true };
    } catch (err) {
      console.log(err);
      data = { success: false, message: String(err) };
    }
    return data;
  },

  removeCartItem: async (id: number) => {
    let data: CartResponse;
    try {
      await cartModel.get('items').remove({ id }).write();
      const items = await cartModel.get('items').value();
      const total = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      await cartModel.set('total', total).write();
      data = { success: true };
    } catch (err) {
      console.log(err);
      data = { success: false, message: String(err) };
    }
    return data;
  },

  updateCartItem: async (item: Cart) => {
    let data: CartResponse;
    try {
      const { id } = item;
      await cartModel.get('items').find({ id }).assign(item).write();
      const items = await cartModel.get('items').value();
      const total = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      await cartModel.set('total', total).write();
      data = { success: true };
    } catch (err) {
      console.log(err);
      data = { success: false, message: String(err) };
    }
    return data;
  },
};
