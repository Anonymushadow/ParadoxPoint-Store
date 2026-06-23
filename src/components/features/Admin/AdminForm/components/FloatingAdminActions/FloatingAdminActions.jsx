import "./FloatingAdminActions.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faCancel } from '@fortawesome/free-solid-svg-icons'
import { useProductsStore } from "@store/productsStore";
import { toast } from "react-toastify";

export const FloatingAdminActions = ()=> {
    const showButtonsRoutes = ["/login", "/admin"];
    const showButtons = showButtonsRoutes.includes(location.pathname);

    const ownProductsModified = useProductsStore(state => state.ownProductsModified);
    const resetOwnProducts = useProductsStore(state => state.resetOwnProducts);
    const saveOwnProducts = useProductsStore(state => state.saveOwnProducts);

    const handleSave = async () => {
        const toastId = toast.loading("Guardando productos...");

        try {
            const result = await saveOwnProducts();

            toast.update(toastId, {
                render: "Productos guardados correctamente",
                type: "success",
                isLoading: false,
                autoClose: 3000
            });

        } catch (error) {
            console.error(error);

            toast.update(toastId, {
                render: "Error al guardar productos",
                type: "error",
                isLoading: false,
                autoClose: 5000
            });
        }
    };
    
    return (
        <>
            {
                ownProductsModified && showButtons ? (
                    <div className="floatting__admin__buttons">
                        <button className="floatting__admin__cancel__button" onClick={resetOwnProducts}>
                            <FontAwesomeIcon className="floatting__admin__cancel__button__icon" icon={faCancel}/>
                        </button>
                        <button className="floatting__admin__save__button" onClick={handleSave}>
                            <FontAwesomeIcon className="floatting__admin__save__button__icon" icon={faSave}/>
                        </button>
                    </div>
                ) : null
            }
        </>
    );
}