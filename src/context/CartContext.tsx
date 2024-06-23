import { createContext, useState } from 'react';
import CartItem from '@/components/CartItem';

type CartContextType = {
  cartItems: CartItems | [];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  showCartModal: boolean;
  openCartModal: () => void;
  closeCartModal: () => void;
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

  // let total = 0;
  // if (cartItems) {
  //   cartItems.forEach((item) => (total = total += item.quantity));
  //   return total;
  // }

  return (
    <CartContext.Provider
      value={{
        showCartModal,
        openCartModal,
        closeCartModal,
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
