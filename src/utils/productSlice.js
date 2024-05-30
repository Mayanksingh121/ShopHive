import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "trendingProducts",
  initialState: {
    trendingProducts: [],
    allProducts: [],
    onProductsPage: false,
  },
  reducers: {
    addTrendingProducts: (state, action) => {
      state.trendingProducts = action.payload;
    },
    addAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    toggleOnProductsPage: (state) => {
      state.onProductsPage = !state.onProductsPage;
    },
  },
});

export const { addTrendingProducts, addAllProducts, toggleOnProductsPage } =
  productSlice.actions;
export default productSlice.reducer;
