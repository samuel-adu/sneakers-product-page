import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

export function useCartContext() {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error('useCartContext must be used within a cartContextProvider');
  }

  return context;
}
