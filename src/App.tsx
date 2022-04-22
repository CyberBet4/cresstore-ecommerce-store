import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/style.css';
import Header from './layouts/Header';
import Home from './pages/Home';
import Footer from './layouts/Footer';
import ProductPage from './pages/ProductPage';  
import SinglePage from './pages/SinglePage';

function App() {
  return (
    
      <div className="App">
        <Header />
        {/* <Home /> */}
        <BrowserRouter>
          <Routes>
            <Route element={<ProductPage />} path='/' />
            {/* <Route element={<SinglePage />} path='/product' /> */}
            <Route element={<SinglePage />} path='/product/:pid' />
          </Routes>
        </BrowserRouter>
        <Footer />
        
      </div>
    
  );
}

export default App;
