import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // Add a plant to the cart; if already present, increase quantity
    addItem: (state, action) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // Remove a plant from the cart entirely by id
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    // Update quantity: pass { id, type: 'increment' | 'decrement' }
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        if (type === 'increment') {
          item.quantity += 1;
        } else if (type === 'decrement') {
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            state.items = state.items.filter(i => i.id !== id);
          }
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectCartTotalCost = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default cartSlice.reducer;
