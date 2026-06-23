import "./HomeProductsSection.css";
import { ProductCard } from "@components/features/Products/ProductCard/ProductCard";
import { useProductsStore } from "../../../../store/productsStore";

export const HomeProductsSection = () => {
    const products = useProductsStore(state => state.productos);

    return (
        <section className="products__cards__section__home" id="home__products">
            <h2 className="products__cards__section__home__title">Últimas anomalías</h2>
            <div className="products__cards__section">
                {
                    products.slice(-3).map(product => (
                        <ProductCard id={product.id} image={product.images} title={product.name} key={product.id} category={product.category} />
                    ))
                }
            </div>
        </section>
    );
}