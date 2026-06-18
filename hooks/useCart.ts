import { create } from "zustand";

interface CartItem {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartStoreProps {
  cartItems: CartItem[];
  cartOpen: boolean;
  maxQty: number;
  setCartOpen: (open: boolean) => void;
  addToCart: (item: CartItem) => void;
  increaseQty: (name: string) => void;
  decreaseQty: (name: string) => void;
  removeFromCart: (name: string) => void;
  clearCart: () => void;
}

export interface CartProps {
  cartItems: CartItem[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  increaseQty: (name: string) => void;
  decreaseQty: (name: string) => void;
  removeFromCart: (name: string) => void;
  clearCart: () => void;
}

const useCart = create<CartStoreProps>((set) => ({
  cartItems: [],
  cartOpen: false,
  maxQty: 10,

  setCartOpen: (open) => set({ cartOpen: open }),

  // Menambahkan Item/Product
  addToCart: (item) =>
    set((state) => {
      const existing = state.cartItems.find((i) => i.name === item.name);
      if (existing) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.name === item.name
              ? { ...i, quantity: i.quantity + item.quantity }
              : i,
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    }),

  increaseQty: (name: string) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.name === name && item.quantity < 10
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    })),

  decreaseQty: (name: string) =>
    set((state) => {
      const targetItem = state.cartItems.find((item) => item.name === name);

      if (targetItem && targetItem.quantity === 1) {
        return {
          cartItems: state.cartItems.filter((item) => item.name !== name),
        };
      }

      return {
        cartItems: state.cartItems.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      };
    }),

  removeFromCart: (name: string) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.name !== name),
    })),

  clearCart: () => set({ cartItems: [] }),
}));

export default useCart;
