// import { createContext, useState } from 'react';
// import products from './src/data.json';

// type CartContextProviderProps = {
//   children: React.ReactNode;
// };

// type cartItem = {
//   id: string;
//   quantity: number;
// };

// type cart = cartItem[];

// type CartContext = {
//   cart: cart;
//   getProductQuantity: (id: string) => number;
//   addOneToCart: (id: string) => void;
//   removeOneFromCart: (id: string) => void;
//   deleteFromCart: (id: string) => void;
//   getTotalCost: () => void;
// };

// const CartContext = createContext<CartContext | null>(null);

// function CartContextProvider({ children }: CartContextProviderProps) {
//   const [cart, setCart] = useState<cart | []>([]);

//   function getProductData(id: string) {
//     const productData = products.find((product) => product.id === id);

//     if (productData === undefined) {
//       console.log(`product data does not exist for product id ${id}`);
//     }

//     return productData;
//   }

//   function getProductQuantity(id: string) {
//     const quantity = cart.find((item) => item.id === id)?.quantity;

//     if (quantity === undefined) {
//       return 0;
//     }

//     return quantity;
//   }

//   function addOneToCart(id: string) {
//     const quantity = getProductQuantity(id);
//     if (quantity === 0) {
//       setCart([
//         ...cart,
//         {
//           id: id,
//           quantity: 1,
//         },
//       ]);
//     } else {
//       setCart(
//         cart.map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       );
//     }
//   }

//   function removeOneFromCart(id: string) {
//     const quantity = getProductQuantity(id);
//     if (quantity === 1) {
//       deleteFromCart(id);
//     } else {
//       setCart(
//         cart.map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//       );
//     }
//   }

//   function deleteFromCart(id: string) {
//     setCart((prevCart) => prevCart.filter((item) => item.id != id));
//   }

//   function getTotalCost() {
//     let totalCost = 0;
//     cart.map((item) => {
//       const productData = getProductData(item.id);
//       if (productData) {
//         totalCost += productData.price * item.quantity;
//       }
//     });
//     return totalCost;
//   }

//   const contextValue = {
//     cart,
//     getProductQuantity,
//     addOneToCart,
//     removeOneFromCart,
//     deleteFromCart,
//     getTotalCost,
//   };

//   return (
//     <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
//   );
// }
