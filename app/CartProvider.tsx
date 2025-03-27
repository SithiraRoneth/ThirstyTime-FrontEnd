import React, { createContext, useContext, useState } from "react";

interface CartItem {
    name: string;
    image: string;
    size: string;
    quantity: number;
    price: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (name: string, size: string) => void;
    updateQuantity: (name: string, size: string, quantity: number) => void;
    clearCart: () => void; // Added clearCart function
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (cartItem) => cartItem.name === item.name && cartItem.size === item.size
            );

            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.name === item.name && cartItem.size === item.size
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            } else {
                return [...prevCart, item];
            }
        });
    };

    const removeFromCart = (name: string, size: string) => {
        setCart((prevCart) => prevCart.filter(item => !(item.name === name && item.size === size)));
    };

    const updateQuantity = (name: string, size: string, quantity: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.name === name && item.size === size ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const clearCart = () => {
        setCart([]); // Clears the cart
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
