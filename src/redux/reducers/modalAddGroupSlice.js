import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    toggleModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
});

export const { setShowModal, toggleModal } = modalSlice.actions;
export const selectShowModal = (state) => state.modal.showModal;
export default modalSlice.reducer;