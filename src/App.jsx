import { useEffect } from "react";
import { RouterComponent } from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuthListener } from "@hooks/auth/authListener";
import { useOwnProducts } from "@hooks/products/ownProducts";
import { FloatingAdminActions } from "@components/features/Admin/AdminForm/components/FloatingAdminActions/FloatingAdminActions";

import { useProductsStore } from "./store/productsStore";
import { useCategoriesStore } from "./store/categoriesStore";
import { categories, productsList } from "@data/products";

function App() {  
  const fetchCategories = useCategoriesStore(state => state.fetchCategories);
  const fetchProducts = useProductsStore(state => state.fetchProducts);
  const products = useProductsStore(state => state.productos);
  const categories = useCategoriesStore(state => state.categories);


  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(()=> {
    fetchCategories();
  }, []);

/*
const productos = useProductsStore(state => state.ownProducts);
useEffect(()=> {
  console.log(productos)
}, [productos])

const setTestProducts = useProductsStore(state => state.setTestProducts);
const setTestCategories = useCategoriesStore(state => state.setTestCategories);

useEffect(() => {
    setTestProducts(productsList);
    setTestCategories(categories);
}, []);
*/

  useAuthListener();
  useOwnProducts();
  
  return (
    <BrowserRouter>
      <RouterComponent />
      <FloatingAdminActions />

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />

    </BrowserRouter>
  )
}

export default App
