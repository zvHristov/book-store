import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItemIF } from '../types';

interface CartContextType {
    cartItems: CartItemIF[];
    addToCart: (item: CartItemIF) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItemIF[]>([]);

    const addToCart = (item: CartItemIF) => {
        setCartItems((prevItems: CartItemIF[]) => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                      && cartItem
                );
            }
            return [...prevItems, { ...item}];
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

