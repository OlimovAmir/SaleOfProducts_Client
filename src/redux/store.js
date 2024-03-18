import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice.js';
import modalReducer from './reducers/modalAddGroupSlice.js';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    language: languageReducer,
    
  }
});
