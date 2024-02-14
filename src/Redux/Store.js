import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogSlice';

export const Store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});