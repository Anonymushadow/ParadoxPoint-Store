import { create } from "zustand";
import { getCategories } from "../modules/firebase/categories/getCategories";

export const useCategoriesStore = create((set)=> ({
    categories: [],
    loading: false,

    setTestCategories: (testCategories) => set({categories: testCategories}),
    loadCategories: (newCategories) => set({ categories: newCategories }),
    fetchCategories: async () => {
        set({ loading: true });

        const data = await getCategories();

        set({ categories: data, loading: false });
    } 
}))