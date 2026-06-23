import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@components/ui/Components.ui";
import { useProductsStore } from "@store/productsStore";
import { useCartStore } from "@store/cartStore";

export const ProductDetails = () => {
    const { IdProducto } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const Navigate = useNavigate();

    const addItem = useCartStore(state => state.addItem);

    // Busca el producto cuyo id coincide con el de la url
    const product = useProductsStore(state =>
        state.productos.find(p => String(p.id) === IdProducto)
    );

    // si no se encuentra el producto muestra por default un mensaje
    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    // Al clickear el boton de añadir al carrito lo añade
    const handleButton = () => {
        addItem(product);
    }

    return (
        <div className="product__detail__container">
            <div className="product__detail__turn__back__container">
                <p className="product__detail__turn__back" onClick={() => Navigate("/productos")}>← Volver a productos</p>
            </div>
            <div className="product__detail__box">
                <div className="product__detail__box__principal__information">
                    <div className="product__detail__box__principal__information__images__container">
                        <div className="product__detail__box__principal__information__images__slider">
                            <img className="product__detail__box__principal__information__image" src={`${product.images[selectedImage]}`} alt="producto" />
                        </div>
                        <div className="product__detail__box__principal__information__images__list">
                            {
                                product.images.map((image, index) => (
                                    <div className="product__detail__box__principal__information__images__list__item" key={index}>
                                        <img className="product__detail__box__principal__information__images__list__item__image" src={`${image}`} onClick={() => setSelectedImage(index)} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="product__detail__box__principal__information__data">
                        <div className="product__detail__box__principal__information__title__container">
                            <h1 className="product__detail__box__principal__information__title">
                                {product.name}
                            </h1>
                            <div className="product__detail__box__principal__information__category">
                                {product.category}
                            </div>
                        </div>
                        <div className="product__detail__box__principal__information__text__container">
                            <p className="product__detail__box__principal__information__text__title">
                                {product.descriptionTitle}
                            </p>
                            <p className="product__detail__box__principal__information__text__description">
                                {product.description}
                            </p>
                        </div>
                        <div className="product__detail__box__principal__information__cta__container">
                            {
                                product.category.toLowerCase() !== "servicios" && (
                                    <>
                                        <span className="product__detail__box__principal__information__cta__price">${product.price.toLocaleString('es-AR')}</span>
                                        {
                                            product.offer && (
                                                <span className="product__detail__box__principal__information__cta__offer__tag">OFERTA</span> 
                                            )
                                        }
                                    </>
                                )
                            }
                            <div className="product__detail__box__principal__information__cta__button__container">
                                <Button styles={["cta", "small"]} handleClick={handleButton}>Añadir al carrito</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    product.characteristics.length > 0 && (
                        <div className="product__detail__box__extra__information">
                            <div className="product__detail__box__extra__information__characteristics__container">
                                <h2 className="product__detail__box__extra__information__characteristics__title">Caracteristicas:</h2>
                                <ul className="product__detail__box__extra__information__characteristics__list">
                                    {
                                        product.characteristics.map((car, index) => (
                                            <li key={index} className="product__detail__box__extra__information__characteristics__item">{car}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="product__detail__box__extra__information__image__container">
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}