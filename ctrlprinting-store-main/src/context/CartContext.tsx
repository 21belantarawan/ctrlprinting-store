import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PrintingProduct, DesignProduct } from '@/data/products';

export interface CartItem {
  id: number;
  product: (PrintingProduct | DesignProduct) & { type: 'printing' | 'design' };
  qty: number;
  unitPrice: number;
  extras: string;
  subtotal: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.length;
  const cartSubtotal = cart.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartCount, cartSubtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
