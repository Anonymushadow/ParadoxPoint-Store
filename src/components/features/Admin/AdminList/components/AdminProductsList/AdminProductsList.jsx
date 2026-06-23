import { AdminProductItem } from "../AdminProductItem/AdminProductItem";

export const AdminProductsList = ({ products, loading }) => {
    return (
        <div className="admin__content__products__container">
            <div className="admin__content__products__headers">
                <div>ID</div>
                <div>Producto</div>
                <div>Precio</div>
                <div>Categoria</div>
                <div>Vendedor</div>
            </div>
            <div className="admin__content__products__list">
                {
                    loading ? (
                        <p>Cargando productos...</p>
                    ) : products.length === 0 ? (
                        <p>No hay productos</p>
                    ) : (
                        products.map((product) => (
                            <AdminProductItem key={product.id} product={product} />
                        ))
                    )
                }
            </div>
        </div>
    );
};