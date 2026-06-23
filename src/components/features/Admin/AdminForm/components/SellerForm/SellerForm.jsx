export const SellerForm = ({ product, handleChange }) => {
  return (
    <div className="seller__section">
      <div className="hud__header">
        <span>Datos del Vendedor</span>
      </div>
      <div className="form__grid">
        <div className="form__group">
          <label>Nombre</label>
          <input type="text" name="sellerName" value={product.sellerName} onChange={handleChange} />
        </div>
        <div className="form__group">
          <label>Teléfono</label>
          <input type="text" name="sellerPhone" value={product.sellerPhone} onChange={handleChange} />
        </div>
        <div className="form__group form-group__full">
          <label>Email</label>
          <input type="email" name="sellerEmail" value={product.sellerEmail} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};