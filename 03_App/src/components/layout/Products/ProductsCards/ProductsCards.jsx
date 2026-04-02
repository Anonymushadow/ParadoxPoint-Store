import "./ProductsCards.css";
import { ProductCard } from "@components/features/Products/ProductCard/ProductCard";

export const ProductsCards = ({products})=> {

    return (
        <section className="products__cards__section">
            {
                products.map(product => (
                    <ProductCard id={product.id} image={product.images} title={product.name} key={product.id} category={product.category}/>
                ))
            }
        </section>
    )
}