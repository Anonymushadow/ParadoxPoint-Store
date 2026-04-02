import { useEffect } from "react";
import { RouterComponent } from "./routes/router";
import { useSelector, useDispatch } from "react-redux";
import { productsList, categories } from "@data/products";
import { loadProducts } from "@slices/productsSlice";
import { loadCategories } from "@slices/categoriesSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loadProducts(productsList));
  }, [productsList]);
  
  useEffect(()=> {
    dispatch(loadCategories(categories));
  }, [categories]);

  return (
    <>
      <RouterComponent />
    </>
  )
}

export default App
