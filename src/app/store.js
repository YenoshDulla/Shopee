import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/slice/cartSlice'

export default configureStore({
    reducer:{
        cart:cartReducer,
        
    }
})