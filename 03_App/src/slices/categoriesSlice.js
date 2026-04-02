import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        loadCategories: (state, action) => action.payload,
    }
});

export default categoriesSlice.reducer;
export const { loadCategories } = categoriesSlice.actions;