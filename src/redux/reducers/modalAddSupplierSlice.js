import { createSlice } from '@reduxjs/toolkit';

const modalAddSupplierSlice = createSlice({
  name: 'modal',
  initialState: {
    showModal: false,
  },
  reducers: {
    openModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
  },
});

export const { openModal, closeModal } = modalAddSupplierSlice.actions;

export default modalAddSupplierSlice.reducer;