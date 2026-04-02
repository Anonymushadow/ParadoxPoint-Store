import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        loadProducts: (state, action) => action.payload,
        addProduct: (state, action) => [ ...state, action.payload]
    }
})

export default productsSlice.reducer;
export const { addProduct, loadProducts } = productsSlice.actions;