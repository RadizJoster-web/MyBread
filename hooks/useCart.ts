import { create } from "zustand";

interface CartItem {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (item: CartItem) => void;
}

const useCart = create<CartStore>((set) => ({
  cartItems: [],
  cartOpen: false,

  setCartOpen: (open) => set({ cartOpen: open }),

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
}));

export default useCart;
