import "./CartMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useUiStore } from "../../../store/uiStore";
import { useCartStore } from "../../../store/cartStore";

export const CartMenu = () => {
    const openedCart = useUiStore(state => state.openedCart);
    const totalPrice = useCartStore(state => state.totalPrice);
    const items = useCartStore(state => state.items);
    const removeItem = useCartStore(state => state.removeItem);
    const deleteOneItem = useCartStore(state => state.deleteOneItem);
    const addOneItem = useCartStore(state => state.addOneItem);

    // === FUNCION PARA CONFIRMAR PEDIDO ===
    const handleConfirmPedido = () => {
        if (!items || items.length === 0) {
            alert("No hay productos en el carrito!");
            return;
        }

        // Agrupar items por seller
        const groupedBySeller = items.reduce((acc, item) => {
            if (!acc[item.seller]) acc[item.seller] = [];
            acc[item.seller].push(item);
            return acc;
        }, {});

        // Contar total de unidades
        const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

        // Timestamp
        const timestamp = new Date().toLocaleString("es-AR");

        // Mensaje
        let mensaje = `[PARADOX ORDER PROTOCOL]\n`;
        mensaje += `${timestamp}\n\n`;

        // Bloques por seller
        for (const seller in groupedBySeller) {
            mensaje += `> Seller: ${seller}\n`;

            groupedBySeller[seller].forEach(item => {
                mensaje += `   - [ID:${item.id}] x${item.quantity} – ${item.name.toUpperCase()}\n`;
            });

            mensaje += `\n`; // espacio entre sellers
        }

        // Footer
        mensaje += `💰 TOTAL ITEMS: ${totalItems}\n`;
        mensaje += `📡 STATUS: 200`;

        // Encode para URL
        const encodedMessage = encodeURIComponent(mensaje);
        const numero = "5491168129047"; // sin el +
        const waLink = `https://wa.me/${numero}?text=${encodedMessage}`;

        // Abrir WhatsApp
        window.open(waLink, "_blank");
    };

    return (
        <>
            <div className={openedCart ? "navbar__cart__menu__bg navbar__cart__menu__bg__open" : "navbar__cart__menu__bg"}></div>
            <div className={openedCart ? "navbar__cart__menu navbar__cart__menu__open" : "navbar__cart__menu"}>
                <div className="navbar__cart__content">
                    <div className="navbar__cart__content__title__container">
                        <p className="navbar__cart__content__title">SELECCIÓN</p>
                    </div>

                    <div className="navbar__cart__content__products__container">
                        {items.length > 0 ? (
                            items.map((item, index) => (
                                <div key={index} className="navbar__cart__content__product">
                                    <div className="navbar__cart__content__product__structure">
                                        <div className="navbar__cart__content__product__image__container">
                                            <img src={item.images[0]} alt="" className="navbar__cart__content__product__image" />
                                        </div>
                                        <div className="navbar__cart__content__product__description">
                                            <div className="navbar__cart__content__product__title__container">
                                                <h2 className="navbar__cart__content__product__title">{item.name}</h2>
                                            </div>
                                            { 
                                                item.category.toLowerCase() !== "servicios" && (
                                                    <div className="navbar__cart__content__product__quantity__container">
                                                        <span className="navbar__cart__content__product__quantity__price">${item.totalItemPrice.toLocaleString("es-AR")}</span>
                                                        <div className="navbar__cart__content__product__quantity__manager">
                                                            <button className="navbar__cart__content__product__quantity__extract__btn" onClick={() => deleteOneItem(item.id)}>-</button>
                                                            <span className="navbar__cart__content__product__quantity">{item.quantity}</span>
                                                            <button className="navbar__cart__content__product__quantity__add__btn" onClick={() => addOneItem(item.id)}>+</button>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="navbar__cart__content__product__delete__button__container" onClick={() => removeItem(item.id)}>
                                            <FontAwesomeIcon icon={faTrashCan} className="navbar__cart__content__product__delete__button__icon" />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="navbar__cart__empty__message">No hay productos en el carrito</p>
                        )}
                    </div>

                    <div className="navbar__cart__content__price__container">
                        <div className="navbar__cart__content__total__container">
                            <span className="navbar__cart__content__total__span">TOTAL</span>
                            <p className="navbar__cart__content__total__ammount">${totalPrice ? totalPrice.toLocaleString("es-AR") : "0.00"}</p>
                        </div>
                        <button className="navbar__cart__content__price__confirm" onClick={handleConfirmPedido}>
                            Confirmar petición
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};