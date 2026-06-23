import "./ProductsCategoriesCard.css";

export const ProductsCategoriesCard = ({category, selected, select, index})=> {
    return (
        <div className={selected ? "category__card category__card__selected" : "category__card"} onClick={()=> select(category.category.toLowerCase())}>
            <div className="card__shadow__top"></div>
            <div className="card__shadow__bottom"></div>
            <div className="card__shadow__left"></div>
            <div className="card__shadow__right"></div>
            <div className="card__shadow__top__left__corner"></div>
            <div className="card__shadow__top__right__corner"></div>
            <div className="card__shadow__bottom__left__corner"></div>
            <div className="card__shadow__bottom__right__corner"></div>
            <div className="category__card__icon__container">
                <img src={category.logo} alt="category" className="category__card__icon"/>
            </div>
            <div className="category__card__content__container">
                <h3 className="category__card__title">Sector 0{index}: {category.category}</h3>
                <p className="category__card__description">{category.description}</p>
            </div>
        </div>
    )
} 