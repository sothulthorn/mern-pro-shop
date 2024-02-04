import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      const itemsPrice = state.cartItems.reduce(
        (acc, item) => acc + (item.price * 100 * item.quantity) / 100,
        0
      );
      state.itemsPrice = addDecimals(itemsPrice);

      // Calculate the shipping price
      const shippingPrice = itemsPrice > 100 ? 0 : 10;
      state.shippingPrice = addDecimals(shippingPrice);

      // Calculate the tax price
      const taxPrice = 0.15 * itemsPrice;
      state.taxPrice = addDecimals(taxPrice);

      const totalPrice = itemsPrice + shippingPrice + taxPrice;
      // Calculate the total price
      state.totalPrice = addDecimals(totalPrice);

      // Save to local storage
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
