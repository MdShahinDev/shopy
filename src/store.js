import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './Components/Slices/CartSlice'
import { wishListSlice } from './Components/Slices/wishListSlice'

export default configureStore({
  reducer: {
    cartItemManager: cartSlice.reducer,
    wishItemManager: wishListSlice.reducer,
  }
})