// src/features/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const AddNameCharacteristicSlice = createSlice({
  name: 'formAddNameCharacteristic',
  initialState: {
    isVisible: false,
  },
  reducers: {
    showFormAddNameCharacteristic(state) {
      state.isVisible = true;
    },
    hideFormAddNameCharacteristic(state) {
      state.isVisible = false;
    },
  },
});

export const { showFormAddNameCharacteristic, hideFormAddNameCharacteristic } = AddNameCharacteristicSlice.actions;

export default AddNameCharacteristicSlice.reducer;
