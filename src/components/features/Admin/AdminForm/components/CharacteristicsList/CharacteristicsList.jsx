import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const CharacteristicsList = ({ characteristics, handleCharacteristicChange, handleDeleteCharacteristic, handleAddCharacteristic }) => {
  return (
    <div className="form__group form__group__full">
      <label>Características</label>
      <div className="characteristics__container">
        {characteristics.length === 0 && (
          <div className="characteristics__empty"> Sin características </div>
        )}
        {characteristics.map((char, index) => (
            <div key={index} className="characteristic__item">
                <input type="text" value={char} placeholder={`Característica ${index + 1}`} onChange={(e) => handleCharacteristicChange(index, e.target.value)} />
                <button type="button" className="characteristic__delete" onClick={() => handleDeleteCharacteristic(index)}>
                <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        ))}
        <button type="button" className="btn btn__add__characteristic" onClick={handleAddCharacteristic}>
          Añadir característica
        </button>
      </div>
    </div>
  );
};