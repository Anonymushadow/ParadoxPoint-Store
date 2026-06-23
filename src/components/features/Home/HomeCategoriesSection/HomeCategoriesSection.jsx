import "./HomeCategoriesSection.css";
import { ProductsCategoriesCard } from "@components/features/Products/ProductsCategoryCard/ProductsCategoriesCard"; 
import { useRef, useState, useEffect } from "react";
import { useCategoriesStore } from "../../../../store/categoriesStore";

export const HomeCategoriesSection = () => {
    const categorias = useCategoriesStore(state => state.categories);
    const sliderRef = useRef(null);
    const [visibleCount, setVisibleCount] = useState(3); // fallback inicial

    useEffect(() => {
        const updateVisible = () => {
            if (!sliderRef.current) return;

            const firstItem = sliderRef.current.querySelector(".slider__item");
            if (!firstItem) return;

            const containerWidth = sliderRef.current.offsetWidth;
            const itemWidth = firstItem.offsetWidth;

            // extraer el gap del contenedor en px
            const sliderStyle = window.getComputedStyle(sliderRef.current);
            const gapPx = parseFloat(sliderStyle.columnGap || sliderStyle.gap || "0"); // fallback a 0

            // ancho total de cada item incluyendo el gap derecho
            const totalItemWidth = itemWidth + gapPx;

            // calcular cuántos entran completos
            const count = Math.floor(containerWidth / totalItemWidth);
            setVisibleCount(count || 1);
        }

        const timeout = setTimeout(updateVisible, 50);
        window.addEventListener("resize", updateVisible);
        return () => {
            window.removeEventListener("resize", updateVisible);
            clearTimeout(timeout);
        }
    }, [categorias]);

    return (
        <section className="products__categories__section">
            <h2 className="products__cards__section__home__title">
                Sectores destacados del Shattered Grid
            </h2>
            <div 
                className="products__categories__slider__categories home__categories__slider__categories"
                ref={sliderRef}
            >
                {categorias.slice(0, visibleCount).map((categoria, index) => (
                    <div className="slider__item" key={index}>
                        <ProductsCategoriesCard category={categoria} index={index} />
                    </div>
                ))}
            </div>
        </section>
    );
}