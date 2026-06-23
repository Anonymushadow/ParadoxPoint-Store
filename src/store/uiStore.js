import { create } from "zustand";

export const useUiStore = create((set)=> ({
    openedMenu: false,
    openedCart: false,

    toggleMenu: () => set((state) => ({ openedMenu: !state.openedMenu })),
    toggleCart: () => set((state) => ({ openedCart: !state.openedCart })),
    forceToggleMenu: (isOpened) => set({ openedMenu: isOpened }),
    forceToggleCart: (isOpened) => set({ openedCart: isOpened })
}))