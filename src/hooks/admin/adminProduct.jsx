import { useEffect, useState } from "react";
import { initialProduct } from "@components/features/Admin/AdminForm/modules/initialProduct";

export const useAdminProduct = ({ user, products, idProducto }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [product, setProduct] = useState(initialProduct);
  
  useEffect(() => {
    if (!user || idProducto) return;

    setProduct(prev => ({
      ...prev,
      sellerName: user.displayName || "",
      sellerPhone: user.phoneNumber || "",
      sellerEmail: user.email || "",
    }));
  }, [user, idProducto]);

  useEffect(() => {
    if (!idProducto) return;
    
    const filteredProduct = products.find(prod => prod.id === idProducto);

    if (!filteredProduct) return;

    setProduct({
      id: filteredProduct.id || "",
      name: filteredProduct.name || "",
      price: filteredProduct.price || "",
      category: filteredProduct.category || "Tecnologia",
      descriptionTitle: filteredProduct.descriptionTitle || "",
      description: filteredProduct.description || "",
      characteristics: filteredProduct.characteristics || [],
      sellerName: filteredProduct.sellerName || "",
      sellerPhone: filteredProduct.sellerPhone || "+5491168129047",
      sellerEmail: filteredProduct.sellerEmail || "",
      images: filteredProduct.images || [],
      imagesFiles: filteredProduct.imagesFiles || [],
    });
  }, [idProducto, products]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddImages = (files) => {
    const filesArray = Array.from(files);

    const newImages = filesArray.map(
      file => URL.createObjectURL(file)
    );

    setProduct(prev => ({
      ...prev,
      images: [
        ...prev.images,
        ...newImages
      ],
      imagesFiles: [
        ...(prev.imagesFiles || []),
        ...filesArray
      ]
    }));
  };

  const handleDeleteImage = (index) => {
    setProduct(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
      imagesFiles: prev.imagesFiles.filter((_, i) => i !== index)
    }));

    if (selectedImage >= product.images.length - 1) {
      setSelectedImage(0);
    }
  };

  const handleCharacteristicChange = (index, value) => {
    const updatedCharacteristics = [
      ...product.characteristics
    ];

    updatedCharacteristics[index] = value;

    setProduct(prev => ({
      ...prev,
      characteristics: updatedCharacteristics
    }));
  };

  const handleAddCharacteristic = () => {

    setProduct(prev => ({
      ...prev,
      characteristics: [
        ...prev.characteristics,
        ""
      ]
    }));
  };

  const handleDeleteCharacteristic = (index) => {

    const updatedCharacteristics = product.characteristics.filter((_, i) => i !== index);

    setProduct(prev => ({
      ...prev,
      characteristics: updatedCharacteristics
    }));
  };

  return {
    product,
    selectedImage,

    setSelectedImage,

    handleChange,
    handleAddImages,
    handleDeleteImage,

    handleCharacteristicChange,
    handleAddCharacteristic,
    handleDeleteCharacteristic
  };
};