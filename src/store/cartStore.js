import { create } from 'zustand'

export const useCartStore = create((set) => ({
  items: [],
  totalQuantity: 0,
  totalPrice: 0,

  addItem: (newItem) =>
    set((state) => {
      const existingItem = state.items.find(item => item.id === newItem.id)

      let updatedItems
      let updatedTotalQuantity = state.totalQuantity + 1
      let updatedTotalPrice = state.totalPrice

      if (!existingItem) {
        const itemToAdd = {
          ...newItem,
          quantity: 1,
          unitPrice: newItem.price,
          totalItemPrice: newItem.price
        }

        updatedItems = [...state.items, itemToAdd]
        updatedTotalPrice += newItem.price

      } else {
        updatedItems = state.items.map(item =>
          item.id === newItem.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalItemPrice: item.unitPrice * (item.quantity + 1)
              }
            : item
        )

        updatedTotalPrice += existingItem.unitPrice
      }

      return {
        items: updatedItems,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice
      }
    }),

  removeItem: (id) =>
    set((state) => {
      const existingItem = state.items.find(item => item.id === id)
      if (!existingItem) return {}

      return {
        items: state.items.filter(item => item.id !== id),
        totalQuantity: state.totalQuantity - existingItem.quantity,
        totalPrice: state.totalPrice - existingItem.totalItemPrice
      }
    }),

  deleteOneItem: (id) =>
    set((state) => {
      const existingItem = state.items.find(item => item.id === id)
      if (!existingItem || existingItem.quantity <= 1) return {}

      return {
        items: state.items.map(item =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalItemPrice: item.unitPrice * (item.quantity - 1)
              }
            : item
        ),
        totalQuantity: state.totalQuantity - 1,
        totalPrice: state.totalPrice - existingItem.unitPrice
      }
    }),

  addOneItem: (id) =>
    set((state) => {
      const existingItem = state.items.find(item => item.id === id)
      if (!existingItem) return {}

      return {
        items: state.items.map(item =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalItemPrice: item.unitPrice * (item.quantity + 1)
              }
            : item
        ),
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + existingItem.unitPrice
      }
    }),

  clearCart: () =>
    set({
      items: [],
      totalQuantity: 0,
      totalPrice: 0
    }),
}))