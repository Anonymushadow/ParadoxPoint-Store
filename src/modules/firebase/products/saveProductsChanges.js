import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "@config/firebase.config";

export const saveProductsChanges = async ({ newProducts, updatedProducts, deletedProducts }) => {
    // NUEVOS

    for (const product of newProducts) {

        const productToSave = {
            ...product
        };

        delete productToSave.imagesFiles;

        await setDoc(
            doc(db, "products", product.id),
            productToSave
        );
    }

    // MODIFICADOS

    for (const product of updatedProducts) {

        const productToSave = {
            ...product
        };

        delete productToSave.imagesFiles;

        await setDoc(
            doc(db, "products", product.id),
            productToSave
        );
    }

    // ELIMINADOS

    for (const product of deletedProducts) {

        await deleteDoc(
            doc(db, "products", product.id)
        );
    }
};