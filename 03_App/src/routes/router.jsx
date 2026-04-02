import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from '@components/layout/Components.layout';
import { Footer } from '@components/layout/Components.layout';
import { Home } from "@pages/Home/Home";
import { Products } from '@pages/Products/Products';
import { ProductDetail } from '@pages/ProductDetail/ProductDetail';
import { ScrollToTop } from '@components/effects/ScrollToTop/ScrollToTop';

export const RouterComponent = () => {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <div className='content__container'>
                <Routes>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/productos" element={ <Products /> }/>
                    <Route path="/productos/:IdProducto" element={<ProductDetail />} />
                    <Route path="*" element={ <Home /> }/>
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};