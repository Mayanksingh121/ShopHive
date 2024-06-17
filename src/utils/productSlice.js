import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "trendingProducts",
  initialState: {
    trendingProducts: [],
    allProducts: [],
    onProductsPage: false,
    darkMode: false,
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
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const {
  addTrendingProducts,
  addAllProducts,
  toggleOnProductsPage,
  toggleDarkMode,
} = productSlice.actions;
export default productSlice.reducer;
