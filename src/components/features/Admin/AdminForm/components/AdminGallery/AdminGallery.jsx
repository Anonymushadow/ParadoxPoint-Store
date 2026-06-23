import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";

export const AdminGallery = ({ product, selectedImage, setSelectedImage, handleDeleteImage, handleAddImages }) => {
  const fileInputRef = useRef(null);
  const onAddImages = (e) => { handleAddImages(e.target.files); };

  return (
    <div className="admin__product__gallery hud__panel">
      <div className="hud__header">
        <span>Imágenes del Producto</span>
      </div>
      <div className="gallery__preview">
        {product.images.length > 0 ? (
          <img src={product.images[selectedImage]} alt="" />
        ) : (
          <div className="gallery__empty">
            <FontAwesomeIcon icon={faImage} />
            <span>Sin imágenes</span>
          </div>
        )}
      </div>
      <div className="gallery__thumbs">
        {product.images.map((img, index) => (
          <div key={index} className={ `thumb ${selectedImage === index ? "thumb__active" : "" } `}>
            <img src={img} alt="" onClick={() => setSelectedImage(index)} />
            <button type="button" className="thumb__delete" onClick={() => handleDeleteImage(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>
      <button className="upload__btn" onClick={() => fileInputRef.current.click()}>
        <FontAwesomeIcon icon={faUpload} />
        Subir imágenes
      </button>
      <input ref={fileInputRef} type="file" multiple hidden accept="image/*" onChange={onAddImages}/>
      <div className="gallery__info">
        JPG / PNG · Máx 5MB
      </div>
    </div>
  );
};