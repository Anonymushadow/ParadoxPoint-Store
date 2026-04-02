import "./ProductsCategories.css";
import { ProductsCategoriesCard } from "../ProductsCategoryCard/ProductsCategoriesCard";
import { useSelector } from "react-redux";
import { useRef } from "react";

export const ProductsCategories = ({ selected, setSelected }) => {
    const categorias = useSelector(state => state.categories);
    const sliderRef = useRef(null);

    const toggleSelect = (category) => {
        setSelected(prev =>
            prev.includes(category)
                ? prev.filter(item => item !== category)
                : [...prev, category]
        );
    };

    const verifySelected = (category) => selected.includes(category);

    /* BOTONES DESKTOP */
    const next = () => {
        const slider = sliderRef.current;
        if (!slider) return;
        const cardWidth = slider.children[0]?.offsetWidth || 0;
        const gap = 24; // gap fijo
        slider.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
    };

    const prev = () => {
        const slider = sliderRef.current;
        if (!slider) return;
        const cardWidth = slider.children[0]?.offsetWidth || 0;
        const gap = 24;
        slider.scrollBy({ left: -(cardWidth + gap), behavior: "smooth" });
    };

    const progressRef = useRef(null);

    const handleScroll = () => {
        const slider = sliderRef.current;
        const bar = progressRef.current;

        if (!slider || !bar) return;

        const scrollWidth = slider.scrollWidth;
        const clientWidth = slider.clientWidth;
        const scrollLeft = slider.scrollLeft;

        const maxScroll = scrollWidth - clientWidth;

        if (maxScroll <= 0) {
            bar.style.width = "100%";
            bar.style.transform = "translateX(0px)";
            return;
        }

        const progress = scrollLeft / maxScroll;

        // tamaño de la barra (lo visible)
        const barWidth = (clientWidth / scrollWidth) * slider.clientWidth;

        // cuanto se puede mover
        const maxMove = slider.clientWidth - barWidth;

        bar.style.width = `${barWidth}px`;
        bar.style.transform = `translateX(${progress * maxMove}px)`;
    };

    return (
        <section className="products__categories__section">
            <div className="products__categories__slider">
                {/* Botón prev desktop */}
                <div onClick={prev} className="products__categories__slider__prev__btn__container">
                    <img src="./images/categories/prev-btn.png" alt="prev" className="products__categories__slider__prev__btn" />
                </div>

                {/* Slider que se puede deslizar en mobile */}
                <div className="products__categories__slider__categories" ref={sliderRef} onScroll={handleScroll}>
                    {categorias.map((categoria, index) => (
                        <div className="slider__item" key={index}>
                            <ProductsCategoriesCard
                                category={categoria}
                                selected={verifySelected(categoria.category.toLowerCase())}
                                select={toggleSelect}
                            />
                        </div>
                    ))}
                </div>

                <div className="slider__progress">
                    <div className="slider__progress__bar" ref={progressRef}></div>
                </div>

                {/* Botón next desktop */}
                <div onClick={next} className="products__categories__slider__next__btn__container">
                    <img src="./images/categories/next-btn.png" alt="next" className="products__categories__slider__next__btn" />
                </div>
            </div>
        </section>
    );
}