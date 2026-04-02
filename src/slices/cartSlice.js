import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Añadir item o incrementar si ya existe
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          unitPrice: newItem.price,
          totalItemPrice: newItem.price
        });
        state.totalPrice += newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.totalItemPrice = existingItem.unitPrice * existingItem.quantity;
        state.totalPrice += existingItem.unitPrice;
      }
    },

    // Eliminar un item completo del carrito
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.totalPrice -= existingItem.totalItemPrice;

      state.items = state.items.filter(item => item.id !== id);
    },

    // Bajar la cantidad de un item en 1
    deleteOneItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (!existingItem || existingItem.quantity <= 1) return;

      existingItem.quantity--;
      existingItem.totalItemPrice = existingItem.unitPrice * existingItem.quantity;
      state.totalQuantity--;
      state.totalPrice -= existingItem.unitPrice;
    },

    // Sumar la cantidad de un item en 1
    addOneItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (!existingItem) return;

      existingItem.quantity++;
      existingItem.totalItemPrice = existingItem.unitPrice * existingItem.quantity;
      state.totalQuantity++;
      state.totalPrice += existingItem.unitPrice;
    },

    // Vaciar el carrito
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, deleteOneItem, addOneItem, clearCart } = cartSlice.actions;