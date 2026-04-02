import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openedMenu: false,
    openedCart: false,
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleMenu: (state) => { state.openedMenu = !state.openedMenu },
        toggleCart: (state) => { state.openedCart = !state.openedCart },
        forceToggleMenu: (state, action) => { state.openedMenu = action.payload },
        forceToggleCart: (state, action) => { state.openedCart = action.payload }
    }
})

export default uiSlice.reducer;
export const { toggleMenu, toggleCart, forceToggleCart, forceToggleMenu } = uiSlice.actions;