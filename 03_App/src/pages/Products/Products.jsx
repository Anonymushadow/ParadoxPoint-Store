import "./Products.css";
import { ProductsCards } from "@components/layout/Products/ProductsCards/ProductsCards";
import { ProductsCategories } from "@components/layout/Products/ProductsCategories/ProductsCategories";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { SearchBar } from "@components/features/Products/SearchBar/SearchBar";
import { ScrollToTopBtn } from "@components/ui/ScrollToTopBtn/ScrollToTopBtn";

export const Products = () => {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState([]);

    const products = useSelector(state => state.products);

    /* Filtro de productos */
    const productsToShow = useMemo(() => {
        return products.filter(prod => {
            const matchCategory = selected.length === 0 || selected.includes(prod.category.toLowerCase());

            const matchSearch = search === "" || prod.name.toLowerCase().includes(search.toLowerCase());

            return matchCategory && matchSearch;
        });
    }, [products, selected, search]);

    return (
        <main className="products">
            <SearchBar setSearch={setSearch} />
            <ProductsCategories selected={selected} setSelected={setSelected} />
            <ProductsCards products={productsToShow} />
            <ScrollToTopBtn />
        </main>
    );
};