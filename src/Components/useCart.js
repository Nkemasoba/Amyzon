// src/components/useCart.js
import { createContext, useContext } from 'react';

// 1. Create and export the shared Context token reference globally
export const CartContext = createContext(undefined);

/**
 * useCart custom context hook
 * Safely extracts operational cart functions out of the provider container.
 */
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be executed strictly within a CartProvider wrapper');
  }
  return context;
}
