export const getProductsChanges = (backupProducts, currentProducts) => {
    const newProducts = [];
    const updatedProducts = [];
    const deletedProducts = [];

    // NUEVOS Y MODIFICADOS

    for (const currentProduct of currentProducts) {
        const backupProduct = backupProducts.find(product => product.id === currentProduct.id);

        if (!backupProduct) {
            newProducts.push(currentProduct);
            continue;
        }

        if (JSON.stringify(currentProduct) !== JSON.stringify(backupProduct)) {
            updatedProducts.push(currentProduct);
        }
    }

    // ELIMINADOS

    for (const backupProduct of backupProducts) {
        const exists = currentProducts.find(product => product.id === backupProduct.id);

        if (!exists) {
            deletedProducts.push(backupProduct);
        }
    }

    return {
        newProducts,
        updatedProducts,
        deletedProducts
    };
};