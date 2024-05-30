import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'trendingProducts',
    initialState: {
        trendingProducts: [],
    },
    reducers: {
        addTrendingProducts: (state,action)=>{
            state.trendingProducts = action.payload;
        }
    }
});

export const {addTrendingProducts} = productSlice.actions;
export default productSlice.reducer;