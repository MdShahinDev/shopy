import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
        // If the product with the same size exists, increase the quantity
        existingItem.qty += 1;
      } else {
        // If the product doesn't exist or the size is different, add a new entry
        state.cartItems.push({ ...action.payload, qty: 1 });
      }

      // Update localStorage
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    deleteCartItem: (state, action) => {
      state.cartItems.splice(action.payload, 1);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    increament: (state, action) => {
      state.cartItems[action.payload].qty +=1
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    decreament:(state, action) => {
      if(state.cartItems[action.payload].qty > 1){
        state.cartItems[action.payload].qty -=1
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteCartItem, increament, decreament } = cartSlice.actions;

export default cartSlice.reducer;
