import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Header from "./composants/Header";
import Footer from "./composants/Footer";
import Appart from './pages/Appart';
import Error404 from './pages/Error404';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/about" element={<About />} />
                <Route path="/appart/:id" element={<Appart />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;

