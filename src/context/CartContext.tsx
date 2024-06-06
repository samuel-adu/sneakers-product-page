import { createContext, useState } from 'react';

type CartContextType = {
  cart: Cart;
  addToCart: (product: Product, quantity: number) => void;
};

type CartContextProviderProps = {
  children: React.ReactNode;
};

type Cart = {
  name: string;
  price: number;
  quantity: number;
};

type Product = {
  name: string;
  price: number;
};

const CartContext = createContext<CartContextType | null>(null);

function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Cart>({
    name: '',
    price: 0,
    quantity: 0,
  });

  function addToCart(item: Product, quantity: number) {
    setCart((prevCart) => ({
      ...prevCart,
      name: item.name,
      price: item.price,
      quantity: quantity,
    }));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
