import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CartMenu } from "@components/features/CartMenu/CartMenu";
import { useCartStore } from "@store/cartStore";
import { useUiStore } from "@store/uiStore";
import { useUserStore } from "@store/userStore";
import { useLogout } from "@hooks/auth/logout";

export const Navbar = () => {
    const totalItems = useCartStore(state => state.totalQuantity);
    const toggleMenu = useUiStore(state => state.toggleMenu);
    const toggleCart = useUiStore(state => state.toggleCart);
    const forceToggleMenu = useUiStore(state => state.forceToggleMenu);
    const openedMenu = useUiStore(state => state.openedMenu);
    const user = useUserStore(state => state.user);
    const navigate = useNavigate();
    const location = useLocation();
    const logoutUser = useLogout();

    const isLoginActive = location.pathname === "/login";
    const hiddenCartRoutes = ["/login", "/admin"];
    const hideCart = hiddenCartRoutes.includes(location.pathname);

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
        } 
    }

    const handleMenuButton = () => {
        toggleMenu();
    }
    
    const handleCartButton = ()=> {
        toggleCart();
    }

    // Manejar el click de un navlink en mobile
    const handleMenuSelection = () => {
        forceToggleMenu(false);
    }

    const handleLogin = () => {
        handleMenuSelection();

        if (user) {
            logoutUser();
        } else {
            navigate("/login");
        }
    }

    // Cerrar menu mobile si cambiamos a desktop 
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 700) {
                forceToggleMenu(false);
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
                <button className={verifyLink(isLoginActive, false)} onClick={handleLogin}>{user ? "Salir" : "Ingresar"}</button>
                {
                    user && (
                        <NavLink to="/admin" className={(data) => verifyLink(data.isActive, false)}>Admin</NavLink>
                    )
                }
                {
                    !hideCart && (
                        <button
                            className="navbar__content__link navbar__content__link__cart__button"
                            data-count={totalItems}
                            onClick={handleCartButton}
                        >
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className="navbar__content__link__cart__button__icon"
                            />
                        </button>
                    )
                }
            </div>

            {/* Navbar content mobile */}
            <div className={defineClases("menuBackground")}>
                <div className={defineClases("menu")}>
                    <NavLink to="/" className={(data) => verifyLink(data.isActive, true)} onClick={handleMenuSelection}>01 INICIO</NavLink>
                    <NavLink to="/productos" className={(data) => verifyLink(data.isActive, true)} onClick={handleMenuSelection}>02 PRODUCTOS</NavLink>
                    <button className={verifyLink(isLoginActive, true)} onClick={handleLogin}>03 {user ? "SALIR DEL SISTEMA" : "ENTRAR AL SISTEMA"}</button>
                    {
                        user && (
                            <NavLink to="/admin" className={(data) => verifyLink(data.isActive, true)} onClick={handleMenuSelection}>04 ADMIN</NavLink>
                        )
                    }
                    <div className="navbar__mobile__content__link navbar__mobile__content__link__close__menu" onClick={handleMenuButton}>00 CERRAR MENU</div>
                </div>
            </div>

            {/* Boton carrito y menu para mobile */}
            <div className="navbar__mobile__buttons__container">
                {
                    !hideCart && (
                        <button
                            className="navbar__mobile__cart__button"
                            data-count={totalItems}
                            onClick={handleCartButton}
                        >
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className="navbar__mobile__cart__button__icon"
                            />
                        </button>
                    )
                }
                <button className="navbar__mobile__bars__button" onClick={handleMenuButton}>
                    <FontAwesomeIcon icon={faBars} className="navbar__mobile__bars__button__icon" />
                </button>
            </div>

            {/* Carrito de compras */}
            <CartMenu />
            
        </nav>
    );
}



/*
<div className="navbar__mobile__content__link navbar__mobile__content__link__ruptura">
                        <span className="navbar__mobile__content__link__ruptura__color"></span>
                        <span className="navbar__mobile__content__link__ruptura__image"></span>
                        <span className="navbar__mobile__content__link__ruptura__text">0x00 RUPTURA TEMPORAL EN ARREGLO</span>
                    </div>
*/