import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cartItemManager',
  initialState: {
    cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, selectedSize } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id && item.selectedSize === selectedSize);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    deleteCartItem: (state, action) => {
      state.cartItems.splice(action.payload, 1);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    increament: (state, action) => {
      state.cartItems[action.payload].qty += 1;
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    decreament: (state, action) => {
      if (state.cartItems[action.payload].qty > 1) {
        state.cartItems[action.payload].qty -= 1;
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      }
    },
  },
});

export const { addToCart, deleteCartItem, increament, decreament } = cartSlice.actions;

export default cartSlice.reducer;
