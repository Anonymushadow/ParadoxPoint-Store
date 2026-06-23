export const AdminHeader = ({ onAdd }) => {
    return (
        <div className="admin__header">
            <h3 className="admin__header__title"> Administrador </h3>
            <div className="admin__header__add__button__bg">
                <button className="admin__header__add__button" onClick={onAdd}>
                    <p className="admin__header__add__button__text"> Añadir Producto </p>
                    <div className="admin__header__add__button__icon"></div>
                </button>
            </div>
        </div>
    );
};