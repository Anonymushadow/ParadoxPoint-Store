import { useState } from "react";

export const useAdminFilters = (productsList) => {
    const [orderBy, setOrderBy] = useState("name");
    const [search, setSearch] = useState("");
    const [productId, setProductId] = useState("");
    const [category, setCategory] = useState("");

    const filteredProducts = [...productsList]
        .filter(product => {
            const matchSearch = product.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchId = product.id
                .toLowerCase()
                .includes(productId.toLowerCase());

            const matchCategory =
                category === "" ||
                category === "Todos" ||
                product.category === category;

            return (
                matchSearch &&
                matchId &&
                matchCategory
            );
        })
        .sort((a, b) => {
            if (orderBy === "name") {
                return a.name.localeCompare(b.name);
            }

            if (orderBy === "price") {
                return a.price - b.price;
            }

            return 0;
        });

    return {
        filteredProducts,

        orderBy,
        setOrderBy,

        search,
        setSearch,

        productId,
        setProductId,
        
        category,
        setCategory
    };
};