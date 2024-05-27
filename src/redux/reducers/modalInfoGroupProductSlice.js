import { createSlice } from '@reduxjs/toolkit';

export const modalInfoGroupProductSlice = createSlice({
  name: 'infoGroupProduct',
  initialState: {
    showModalInfo: false,
  },
  reducers: {
    showModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
  },
});

export const { showModal, closeModal } = modalInfoGroupProductSlice.actions;
export default modalInfoGroupProductSlice.reducer;