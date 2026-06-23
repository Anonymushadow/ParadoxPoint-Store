import { create } from "zustand";
import { getProducts } from "../modules/firebase/products/getProducts";
import { uploadProductImages } from "../modules/cloudinary/uploadProductImages";
import { getProductsChanges } from "../modules/products/getProductsChanges";
import { saveProductsChanges } from "../modules/firebase/products/saveProductsChanges";

const prepareProduct = (product) => ({
    ...product,
    imagesFiles: product.imagesFiles ?? (product.images?.map(() => null) || [])
});

export const useProductsStore = create((set, get) => ({
    productos: [],
    ownProducts: [],
    backupOwnProducts: [],

    loading: false,
    loadingOwnProducts: false,
    ownProductsModified: false,

    savingProducts: false,

    setTestProducts: (testProducts) => set({ productos: testProducts.map(prepareProduct) }),

    fetchProducts: async () => {
        set({ loading: true });

        const data = await getProducts();

        set({
            productos: data.map(prepareProduct),
            loading: false
        });
    },

    getOwnProducts: async (userId) => {
        set({ loadingOwnProducts: true });

        const { productos } = get();

        const filteredProducts = productos.filter(
            product => product.sellerID === userId
        );

        set({
            ownProducts: structuredClone(filteredProducts),
            backupOwnProducts: structuredClone(filteredProducts),
            loadingOwnProducts: false
        });
    },

    resetOwnProducts: () => {
        const { backupOwnProducts } = get();

        set({
            ownProducts: structuredClone(backupOwnProducts),
            ownProductsModified: false
        });
    },

    deleteOwnProduct: (idProduct) => {
        const { ownProducts } = get();

        const filteredProducts = ownProducts.filter(
            product => product.id !== idProduct
        );

        set({
            ownProducts: filteredProducts,
            ownProductsModified: true
        });
    },

    addOwnProduct: (product) => {
        const { ownProducts } = get();

        const newProduct = {
            ...product,
            id: product.id || crypto.randomUUID()
        };

        set({
            ownProducts: [...ownProducts, newProduct],
            ownProductsModified: true
        });
    },

    modifyOwnProduct: (product) => {
        const { ownProducts } = get();

        const updatedProducts = ownProducts.map(currentProduct =>
            currentProduct.id === product.id
                ? product
                : currentProduct
        );

        set({
            ownProducts: updatedProducts,
            ownProductsModified: true
        });
    },

    updateBackupProducts: () => {
        const { ownProducts } = get();

        set({
            backupOwnProducts: structuredClone(ownProducts),
            ownProductsModified: false
        });
    },

    saveOwnProducts: async () => {
        try {
            set({ savingProducts: true });
            const { ownProducts, backupOwnProducts } = get();

            // Subir imágenes nuevas a Cloudinary
            const productsReadyToSave = await uploadProductImages(structuredClone(ownProducts));

            // Detectar cambios
            const changes = getProductsChanges(backupOwnProducts, productsReadyToSave);

            // Guardar en Firebase
            await saveProductsChanges(changes);

            // Actualizar estado local
            set({
                ownProducts: productsReadyToSave,
                backupOwnProducts: structuredClone(productsReadyToSave),
                ownProductsModified: false
            });

            return {
                success: true
            };

        } catch (error) {
            console.error(error);
            return {
                success: false,
                error
            };

        } finally {
            set({ savingProducts: false });
        }
    },
}));