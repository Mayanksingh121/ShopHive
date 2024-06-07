import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../utils/productSlice";
import cartReducer from "../utils/cartSlice";

const  appStore = configureStore({
    reducer:{
        product: productReducer,
        cart: cartReducer
    }
})

export default appStore;