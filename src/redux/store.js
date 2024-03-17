import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../reducers/languageSlice.js';

export const store = configureStore({
  reducer: {
    language: languageReducer
  }
});
