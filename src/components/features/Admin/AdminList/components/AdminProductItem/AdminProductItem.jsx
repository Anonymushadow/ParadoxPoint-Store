import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUser, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useProductsStore } from "@store/productsStore";
import { useNavigate } from "react-router-dom";
import { shortId } from "../../modules/shortId";
import { copyId } from "../../modules/copyId";

export const AdminProductItem = ({ product }) => {
    const navigate = useNavigate();
    const deleteOwnProduct = useProductsStore( state => state.deleteOwnProduct );

    return (
        <div className="admin__content__product">
            <div className="admin__content__product__id__container" title={product.id} onClick={() => copyId(product.id)}>
                {shortId(product.id)}
            </div>
            <div className="admin__content__product__img__container">
                <div className="admin__content__product__img__subcontainer">
                    <img src={product.images[0]} className="admin__content__product__img"/>
                </div>
                <div className="admin__content__product__img__title__container">
                    <p className="admin__content__product__img__title">
                        {product.name}
                    </p>
                </div>
            </div>
            <div className="admin__content__product__price__container">
                {
                    product.category.toLowerCase() !== "servicios" && product.price
                }
            </div>
            <div className="admin__content__product__category__container">
                {product.category}
            </div>
            <div className="admin__content__product__seller__container">
                <div className="admin__content__product__seller__content">
                    <div className="admin__content__product__seller__name">
                        <FontAwesomeIcon icon={faUser} />
                        {product.sellerName}
                    </div>
                    <div className="admin__content__product__seller__phone">
                        <FontAwesomeIcon icon={faPhone} />
                        {product.sellerPhone}
                    </div>
                </div>
            </div>
            <div className="admin__content__product__buttons__container">
                <button className="admin__content__product__button__edit" onClick={() => navigate(`editar/${product.id}`)}>
                    <FontAwesomeIcon icon={faPencil} />
                    Editar
                </button>
                <button className="admin__content__product__button__delete" onClick={() => deleteOwnProduct(product.id)}>
                    Eliminar
                </button>
            </div>
        </div>
    );
};