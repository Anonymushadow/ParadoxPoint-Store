import { CharacteristicsList } from "../CharacteristicsList/CharacteristicsList";

export const ProductInfoForm = ({ product, categories, handleChange, handleCharacteristicChange, handleDeleteCharacteristic, handleAddCharacteristic }) => {

  return (
    <>
      <div className="hud__header">
        <span>Información del Producto</span>
      </div>
      <div className="form__grid">
        <div className="form__group">
          <label>ID</label>
          <div className="fake__input readonly">
            {product.id || "Nuevo producto"}
          </div>
        </div>
        <div className="form__group">
          <label>Nombre</label>
          <input type="text" name="name" value={product.name} onChange={handleChange} />
        </div>
        <div className="form__group">
          <label>Precio</label>
          <div className="price__input">
            <span>$</span>
            <input type="number" name="price" value={product.price} onChange={handleChange} />
          </div>
        </div>
        <div className="form__group">
          <label>Categoría</label>
          <select name="category" value={product.category} onChange={handleChange}>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.category}>
                {cat.category}
              </option>
            ))}
          </select>
        </div>
        <div className="form__group form__group__full">
          <label>Título descripción</label>
          <input type="text" name="descriptionTitle" value={product.descriptionTitle} onChange={handleChange} />
        </div>
        <div className="form__group form__group__full">
          <label>Descripción</label>
          <textarea name="description" value={product.description} onChange={handleChange} />
        </div>
        <CharacteristicsList
          characteristics={ product.characteristics }
          handleCharacteristicChange={ handleCharacteristicChange }
          handleDeleteCharacteristic={ handleDeleteCharacteristic }
          handleAddCharacteristic={ handleAddCharacteristic }
        />
      </div>
    </>
  );
};