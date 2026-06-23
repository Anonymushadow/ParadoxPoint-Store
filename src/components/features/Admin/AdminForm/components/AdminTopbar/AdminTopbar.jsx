import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

export const AdminTopbar = ({ idProducto, onCancel, onSave }) => {
  return (
    <div className="admin__product__topbar">
      <div>
        <h1>{ idProducto ? "Editar Producto" : "Nuevo Producto" }</h1>
        <p>{ idProducto ? "Editando producto existente" : "Creando nuevo producto" }</p>
      </div>
      <div className="admin__product__actions">
        <button className="btn btn__cancel" onClick={onCancel}>
          <FontAwesomeIcon icon={faXmark} />
          Cancelar
        </button>
        <button className="btn btn__save" onClick={onSave}>
          <FontAwesomeIcon icon={faFloppyDisk} />
          Guardar
        </button>
      </div>
    </div>
  );
};