import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (plant) => {
    const exists = cartItems.find(item => item.id === plant.id);
    if (exists) {
      setCartItems(cartItems.map(item =>
        item.id === plant.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...plant, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const increaseQty = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    ));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQty, decreaseQty }}>
      {children}
    </CartContext.Provider>
  );
};
