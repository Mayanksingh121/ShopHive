import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../utils/productSlice";

const  appStore = configureStore({
    reducer:{
        product: productReducer,
    }
})

export default appStore;