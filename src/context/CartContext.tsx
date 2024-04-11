import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (id: number, quantity: number) => {
    setCartItems(prevItems => [...prevItems, { id, quantity }]);
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.map(item => {
      if (item.id === id) {
        if (item.quantity > 1) {
          // Se a quantidade for maior que 1, diminua 1 da quantidade
          return { ...item, quantity: item.quantity - 1 };
        }
        // Não retornar o item que deseja remover completamente
        return null;
      }
      return item;
    }).filter(item => item !== null) as CartItem[]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart  }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};
