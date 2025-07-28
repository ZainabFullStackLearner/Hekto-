import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartState = {
  cart: CartItem[];
  totalAmount: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
};

export const useCartStore = create(
  persist<CartState>(
    (set, get) => ({
      cart: [],
      totalAmount: 0,

      addToCart: (item) => {
        set((state) => {
          const existingItem = state.cart.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              cart: state.cart.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
              totalAmount: state.totalAmount + item.price,
            };
          }
          return {
            cart: [...state.cart, { ...item, quantity: 1 }],
            totalAmount: state.totalAmount + item.price,
          };
        });
      },

      removeFromCart: (id) =>
        set((state) => {
          const removedItem = state.cart.find((item) => item.id === id);
          return {
            cart: state.cart.filter((item) => item.id !== id),
            totalAmount: removedItem ? state.totalAmount - removedItem.price * removedItem.quantity : state.totalAmount,
          };
        }),

      clearCart: () => set({ cart: [], totalAmount: 0 }),

      increaseQuantity: (id) =>
        set((state) => {
          const item = state.cart.find((i) => i.id === id);
          if (!item) return state;

          return {
            cart: state.cart.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity + 1 } : i
            ),
            totalAmount: state.totalAmount + item.price,
          };
        }),

      decreaseQuantity: (id) =>
        set((state) => {
          const item = state.cart.find((i) => i.id === id);
          if (!item || item.quantity <= 1) return state;

          return {
            cart: state.cart.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            ),
            totalAmount: state.totalAmount - item.price,
          };
        }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
