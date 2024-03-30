import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice.js';
import modalReducer from './reducers/modalAddGroupSlice.js';
import successReducer from '../redux/reducers/successSlice.js';
import nameCharacteristikReduce from './reducers/NameCharacteristikSlice.js';


export const store = configureStore({
  reducer: {
    modal: modalReducer,
    language: languageReducer,
    success: successReducer,
    nameCharacteristik: nameCharacteristikReduce

  }
});