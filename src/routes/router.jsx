import { Route, Routes } from 'react-router-dom';
import { Navbar } from '@components/layout/Components.layout';
import { Footer } from '@components/layout/Components.layout';
import { Home } from "@pages/Home/Home";
import { Products } from '@pages/Products/Products';
import { ProductDetail } from '@pages/ProductDetail/ProductDetail';
import { ScrollToTop } from '@components/effects/ScrollToTop/ScrollToTop';
import { Admin } from '@pages/Admin/Admin';
import { Login } from '@pages/Login/Login';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ProtectedRoute } from './guards/ProtectedRoute';
import { PublicRoute } from './guards/PublicRoute';
import { Navigate } from "react-router-dom";
import { AdminAddEdit } from '@pages/AdminAddEdit/AdminAddEdit';

export const RouterComponent = () => {
    const location = useLocation();
    const root = document.getElementById("root");

    // Cambiar el fondo si es login o admin
    useEffect(() => {
        root.classList.remove("dark");
        root.classList.remove("light");

        if (location.pathname.includes("admin") || location.pathname.includes("login")) {
            root.classList.add("dark");
        } else {
            root.classList.add("light");
        }
    }, [location]);

    return (
        <>
            <ScrollToTop />
            <Navbar />
            <div className='content__container'>
                <Routes>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/productos" element={ <Products /> }/>
                    <Route path="/productos/:IdProducto" element={<ProductDetail />} />
                    <Route path="/login" element={ 
                        <PublicRoute>
                            <Login />
                        </PublicRoute> 
                    }/>
                    <Route path="/admin" element={ 
                        <ProtectedRoute>
                            <Admin /> 
                        </ProtectedRoute>
                    }/>
                    <Route path="/admin/añadir" element={
                        <ProtectedRoute>
                            <AdminAddEdit type="add"/> 
                        </ProtectedRoute>
                    }/>
                    <Route path="/admin/editar/:idProducto" element={
                        <ProtectedRoute>
                            <AdminAddEdit type="edit"/> 
                        </ProtectedRoute>
                    }/>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};