import { createSlice } from '@reduxjs/toolkit';

export const wishListSlice = createSlice({
  name: 'wishItemManager',
  initialState: {
    wishItems: localStorage.getItem('wish') ? JSON.parse(localStorage.getItem('wish')) : [],
  },
  reducers: {
    addToWish: (state, action) => {
      const product = action.payload;
      console.log(product);

      const isAlreadyInWishlist = state.wishItems.find((item) => item.id === product.id);
      if (!isAlreadyInWishlist) {
        state.wishItems.push(product); // Add the entire product to the wishlist
      }
      localStorage.setItem('wish', JSON.stringify(state.wishItems));
    },
    deleteWishItem:(state, action)=>{
        state.wishItems.splice(action.payload, 1);
        localStorage.setItem('wish', JSON.stringify(state.wishItems));
    }
  },
});

export const { addToWish, deleteWishItem } = wishListSlice.actions;
export default wishListSlice.reducer;
