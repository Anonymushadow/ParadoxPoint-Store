import "./AdminForm.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useProductsStore } from "@store/productsStore";
import { useUserStore } from "@store/userStore";
import { useCategoriesStore } from "@store/categoriesStore";
import { useAdminProduct } from "@hooks/admin/adminProduct";

import { AdminTopbar } from "./components/AdminTopbar/AdminTopbar";
import { AdminGallery } from "./components/AdminGallery/AdminGallery";
import { ProductInfoForm } from "./components/ProductInfoForm/ProductInfoForm";
import { SellerForm } from "./components/SellerForm/SellerForm";

export const AdminForm = () => {
  const navigate = useNavigate();
  const { idProducto } = useParams();
  const products = useProductsStore(state => state.ownProducts);
  const user = useUserStore(state => state.user);
  const categories = useCategoriesStore(state => state.categories);
  const { product, selectedImage, setSelectedImage, handleChange, handleAddImages, handleDeleteImage, handleCharacteristicChange, handleAddCharacteristic, handleDeleteCharacteristic } = useAdminProduct({ user, products, idProducto });
  const addOwnProduct = useProductsStore(state => state.addOwnProduct);
  const modifyOwnProduct = useProductsStore(state => state.modifyOwnProduct);

  const handleSaveProduct = () => {
    const normalizedPrice = Number(product.price);

    const productToSave = {
      ...product,
      name: product.name?.trim() || "",
      price: Number.isFinite(normalizedPrice)
        ? normalizedPrice
        : 0,
      sellerID: product.sellerID || user.uid
    };

    if (!productToSave.name) {
      alert("El producto debe tener un nombre");
      return;
    }

    if (productToSave.images.length < 1) {
      alert("El producto debe tener al menos una imagen");
      return;
    }

    if (idProducto) {
      modifyOwnProduct(productToSave);
    } else {
      addOwnProduct(productToSave);
    }

    navigate("/admin");
  };

  return (
    <div className="admin__product__content__container">
      <div className="admin__product">
        <AdminTopbar idProducto={idProducto} onCancel={() => navigate("/admin")} onSave={handleSaveProduct} />
        <div className="admin__product__container">
          <AdminGallery product={product} selectedImage={selectedImage} setSelectedImage={setSelectedImage} handleDeleteImage={handleDeleteImage} handleAddImages={handleAddImages} />
          <div className="admin__product__form hud__panel">
            <ProductInfoForm 
              product={product} 
              categories={categories} 
              handleChange={handleChange}
              handleCharacteristicChange={ handleCharacteristicChange }
              handleDeleteCharacteristic={ handleDeleteCharacteristic }
              handleAddCharacteristic={ handleAddCharacteristic }
            />
            <SellerForm product={product} handleChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
};