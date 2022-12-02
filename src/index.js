import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './sass/index.scss';
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Header from "./composants/Header";
import Footer from "./composants/Footer";
import Appart from './pages/Appart';
import Accordeon from './composants/Accordeon';
import TestAccordeon from './pages/TestAccordeon';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/appart/:id" element={<Appart />} />

        <Route path="/testaccordeon" element={<TestAccordeon />} />


      </Routes>
      <Footer />
    </BrowserRouter>

  </React.StrictMode>
);


