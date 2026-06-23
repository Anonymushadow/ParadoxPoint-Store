import "./AdminList.css";
import { useNavigate } from "react-router-dom";
import { useCategoriesStore } from "@store/categoriesStore";
import { useProductsStore } from "@store/productsStore";
import { AdminHeader } from "./components/AdminHeader/AdminHeader";
import { AdminFilters } from "./components/AdminFilters/AdminFilters";
import { AdminProductsList } from "./components/AdminProductsList/AdminProductsList";
import { useAdminFilters } from "@hooks/admin/adminFilters";

export const AdminList = () => {
    const navigate = useNavigate();
    const productsList = useProductsStore(state => state.ownProducts);
    const loading = useProductsStore(state => state.loadingOwnProducts);
    const categories = useCategoriesStore(state => state.categories);
    const { filteredProducts, search, setSearch, productId, setProductId, category, setCategory, orderBy, setOrderBy } = useAdminFilters(productsList);

    return (
        <div className="admin__container">
            <AdminHeader onAdd={() => navigate("añadir")} />
            <div className="admin__content__container">
                <AdminFilters
                    categories={categories}
                    search={search}
                    setSearch={setSearch}
                    productId={productId}
                    setProductId={setProductId}
                    category={category}
                    setCategory={setCategory}
                    orderBy={orderBy}
                    setOrderBy={setOrderBy}
                />

                <AdminProductsList
                    products={filteredProducts}
                    loading={loading}
                />

            </div>
        </div>
    );
};