import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Product_listing_page from './Product_listing_page';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Product_detail_page from './Product_detail_page';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import Footer from './Footer';

function App() {
  const [search, setSearch] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (newValue) => {
    setSearchValue(newValue);
  };
  const SearchHandler = () => {
    setSearch(searchValue);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <Header searchValue={searchValue} onSearchChange={handleSearchChange} onSearch={SearchHandler} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart/:productId' element={<Cart />} />
          <Route path='/product_listing_page' element={<Product_listing_page search={search} />} />
          <Route path='/product_detail_page/:productId' element={<Product_detail_page />} />
        </Routes>
      </CartProvider>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;