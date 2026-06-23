import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ id, image = ["./images/Go-Busters-StagBuster.png"], title = "Example", category = "perfumeria" }) => {
    const navigate = useNavigate();

    return (
        <div className="product__card__scene" onClick={() => navigate(`/productos/${id}`)}>
            <div className="product__card">
                <div className="product__card__front">
                    <div
                        className="product__card__img__container"
                        style={{ backgroundImage: `url("${image[0]}")` }}
                    ></div>
                    <div className="product__card__name__container">{title}</div>
                </div>
                <div 
                    className="product__card__back"
                    style={{ backgroundImage: `url("./images/categories/product card ${category.toLowerCase()}.png")` }}
                ></div>
            </div>
        </div>
    )
}