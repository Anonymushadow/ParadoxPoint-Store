import { create } from 'zustand'

export const useUserStore = create((set) => ({
  user: null,
  loadingAuth: true,

  setLoadingAuth: (value) => set({
      loadingAuth: value
  }),
  login: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),
}));