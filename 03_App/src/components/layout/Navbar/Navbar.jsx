import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu, forceToggleMenu, toggleCart, forceToggleCart } from "@slices/uiSlice.js";
import { useEffect } from "react";
import { CartMenu } from "@components/features/CartMenu/CartMenu";

export const Navbar = () => {
    let totalItems = useSelector(state => state.cart.totalQuantity);
    const { openedMenu } = useSelector(state => state.ui);
    const dispatch = useDispatch();

    // Verificar si estamos en ese link
    const verifyLink = (isActive, isMobile) => {
        if (isMobile) {
            return isActive ? "navbar__mobile__content__link navbar__mobile__content__link__selected" : "navbar__mobile__content__link";
        } else {
            return isActive ? "navbar__content__link navbar__content__link__selected" : "navbar__content__link";
        }
    }

    // Manejar la apertura y cierre del menu y del cart
    const defineClases = (type) => {
        if (type === "menuBackground") {
            return openedMenu ? "navbar__mobile__content__container__background navbar__mobile__content__container__background__active" : "navbar__mobile__content__container__background";
        } else if (type === "menu") {
            return openedMenu ? "navbar__mobile__content__container navbar__mobile__content__container__active" : "navbar__mobile__content__container";
        } else if (type === "cart") {
            return openedMenu ? "" : "";
        }
    }

    const handleMenuButton = () => {
        dispatch(toggleMenu());
    }
    
    const handleCartButton = ()=> {
        dispatch(toggleCart());
    }

    // Manejar el click de un navlink en mobile
    const handleMenuSelection = () => {
        dispatch(forceToggleMenu(false));
    }

    // Cerrar menu mobile si cambiamos a desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 700) {
                dispatch(forceToggleMenu(false));
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <nav className="navbar">
            <div className="navbar__img__container">
                <img src="/images/logo.png" draggable={false} className="navbar__img" />
            </div>

            {/* Navbar content desktop */}
            <div className="navbar__content__container">
                <NavLink to="/" className={(data) => verifyLink(data.isActive, false)}>Inicio</NavLink>
                <NavLink to="/productos" className={(data) => verifyLink(data.isActive, false)}>Productos</NavLink>
                <button className="navbar__content__link navbar__content__link__cart__button" data-count={totalItems} onClick={handleCartButton}>
                    <FontAwesomeIcon icon={faCartShopping} className="navbar__content__link__cart__button__icon" />
                </button>
            </div>

            {/* Navbar content mobile */}
            <div className={defineClases("menuBackground")}>
                <div className={defineClases("menu")}>
                    <NavLink to="/" className={(data) => verifyLink(data.isActive, true)} onClick={handleMenuSelection}>01 INICIO</NavLink>
                    <NavLink to="/productos" className={(data) => verifyLink(data.isActive, true)} onClick={handleMenuSelection}>02 PRODUCTOS</NavLink>
                    <div className="navbar__mobile__content__link navbar__mobile__content__link__ruptura">
                        <span className="navbar__mobile__content__link__ruptura__color"></span>
                        <span className="navbar__mobile__content__link__ruptura__image"></span>
                        <span className="navbar__mobile__content__link__ruptura__text">0x00 RUPTURA TEMPORAL EN ARREGLO</span>
                    </div>
                    <div className="navbar__mobile__content__link navbar__mobile__content__link__close__menu" onClick={handleMenuButton}>00 CERRAR MENU</div>
                </div>
            </div>

            {/* Boton carrito y menu para mobile */}
            <div className="navbar__mobile__buttons__container">
                <button className="navbar__mobile__cart__button" data-count={totalItems} onClick={handleCartButton}>
                    <FontAwesomeIcon icon={faCartShopping} className="navbar__mobile__cart__button__icon" />
                </button>
                <button className="navbar__mobile__bars__button" onClick={handleMenuButton}>
                    <FontAwesomeIcon icon={faBars} className="navbar__mobile__bars__button__icon" />
                </button>
            </div>

            {/* Carrito de compras */}
            <CartMenu />
        </nav>
    );
}