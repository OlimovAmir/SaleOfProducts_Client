import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice.js';

export const store = configureStore({
  reducer: {
    language: languageReducer
  }
});
