import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  showPreview: boolean;
  lastAdded?: CartItem;
  openPreview: (item: CartItem) => void;
  closePreview: () => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  removeFromCart: (id: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [lastAdded, setLastAdded] = useState<CartItem | undefined>(undefined);

  const openPreview = (item: CartItem) => {
    setLastAdded(item);
    setShowPreview(true);
    setTimeout(() => setShowPreview(false), 2000); 
  };

  const closePreview = () => setShowPreview(false);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems(prev => {
      const existing = prev.find(ci => ci.id === item.id);
      let updated: CartItem[];
      if (existing) {
        updated = prev.map(ci =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      } else {
        updated = [...prev, { ...item, quantity: 1 }];
      }

      const added = updated.find(ci => ci.id === item.id)!;
      openPreview(added);
      return updated;
    });
  };

  const increaseQty = (id: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      showPreview,
      lastAdded,
      openPreview,
      closePreview,
      increaseQty,
      decreaseQty,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
