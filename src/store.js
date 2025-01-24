import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './Components/Slices/cartSlice'
import { wishListSlice } from './Components/Slices/wishListSlice'

export default configureStore({
  reducer: {
    cartItemManager: cartSlice.reducer,
    wishItemManager: wishListSlice.reducer,
  }
})