// features/blogSlice.js
import { createSlice } from '@reduxjs/toolkit';
import alldata from '../Data';

const blogSlice = createSlice({
  name: 'blog',
  initialState: { blogs: alldata, cart: [], total: 0 },
  reducers: {

    addToCart: (state, action) => {
      const itemToAdd = state.blogs.find(item => item.id === action.payload);
    
      const existingCartItem = state.cart.find(item => item.id === action.payload);

      if (itemToAdd) {
        if (existingCartItem) {
          existingCartItem.count += 1;
          state.total += itemToAdd.Price;
        } else {
          state.cart.push({ ...itemToAdd, count: 1 });
          state.total += itemToAdd.Price;
        }
      }
    },

    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      const removedItem = state.cart.find(item => item.id === itemIdToRemove);

      if (removedItem) {
        state.total -= removedItem.Price * removedItem.count;
        state.cart = state.cart.filter(item => item.id !== itemIdToRemove);
      }
    },

    increment: (state, action) => {
      const itemToIncrement = state.cart.find(item => item.id === action.payload);

      if (itemToIncrement) {
        state.total += itemToIncrement.Price;
        itemToIncrement.count += 1;
      }
    },
    
    decrement: (state, action) => {
      const itemToDecrement = state.cart.find(item => item.id === action.payload);

      if (itemToDecrement) {
        if (itemToDecrement.count === 1) {
          state.total -= itemToDecrement.Price;
          state.cart = state.cart.filter(item => item.id !== action.payload);
        } else {
          itemToDecrement.count -= 1;
          state.total -= itemToDecrement.Price;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } = blogSlice.actions;
export default blogSlice.reducer;