import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice.js';
import modalReducer from './reducers/modalAddGroupSlice.js';
import successReducer from '../redux/reducers/successSlice.js';
import nameCharacteristikReduce from './reducers/NameCharacteristikSlice.js';
import addNameCharacteristicReducer from './reducers/AddNameCharacteristicSlice.js';
import addSupplierReducer from './reducers/modalAddSupplierSlice.js';
import infoGroupProductReducer from './reducers/modalInfoGroupProductSlice.js';
import addCashIncomeReducer from './reducers/modalAddCashIncomeSlice.js';


export const store = configureStore({
  reducer: {
    modal: modalReducer,
    language: languageReducer,
    success: successReducer,
    nameCharacteristik: nameCharacteristikReduce,
    addNameCharacteristic: addNameCharacteristicReducer,
    addSupplier: addSupplierReducer,
    infoGroupProduct: infoGroupProductReducer,
    addCashIncome: addCashIncomeReducer,
  },
});