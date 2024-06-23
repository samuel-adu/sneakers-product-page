import { createContext, useMemo, useState } from 'react';
import CartItem from '@/components/CartItem';

type CartContextType = {
  cartItems: CartItems | [];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  showCartModal: boolean;
  openCartModal: () => void;
  closeCartModal: () => void;
  cartCount: number;
  clearCart: () => void;
};

type CartContextProviderProps = {
  children: React.ReactNode;
};

type CartItems = CartItem[];

type CartItem = {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
};

const CartContext = createContext<CartContextType | null>(null);

function CartContextProvider({ children }: CartContextProviderProps) {
  const [showCartModal, setShowCartModal] = useState(false);
  const [cartItems, setCartItems] = useState<CartItems | []>([]);

  function closeCartModal() {
    setShowCartModal(false);
  }

  function openCartModal() {
    setShowCartModal(true);
  }

  function addToCart(item: CartItem) {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity += item.quantity) }
            : item
        );
      } else {
        return [...prevCartItems, { ...item, quantity: item.quantity }];
      }
    });
  }

  function removeFromCart(itemId: number) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== itemId)
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  const cartCount = useMemo(
    () => cartItems.reduce((count, item) => count + item.quantity, 0),
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{
        showCartModal,
        openCartModal,
        closeCartModal,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
