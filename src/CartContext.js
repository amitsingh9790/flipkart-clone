import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    setCart((prevItems) => [...prevItems, productId]);
  };

  const removeFromCart = (productId) => {
    setCart((prevItems) => prevItems.filter((item) => item !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export {CartProvider,useCart} ;