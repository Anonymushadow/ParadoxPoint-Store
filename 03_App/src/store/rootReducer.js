import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice.js";
import uiReducer from "../slices/uiSlice.js";
import productsReducer from "../slices/productsSlice.js";
import cartReducer from "../slices/cartSlice.js";
import categoriesReducer from "../slices/categoriesSlice.js";

export const rootReducer = combineReducers({
    user: userReducer,
    ui: uiReducer,
    products: productsReducer,
    cart: cartReducer, 
    categories: categoriesReducer
});