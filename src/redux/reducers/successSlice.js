import { createSlice } from '@reduxjs/toolkit';

const successSlice = createSlice({
  name: 'success',
  initialState: {
    show: false,
  },
  reducers: {
    showModal: state => {
      state.show = true;
    },
    hideModal: state => {
      state.show = false;
    },
  },
});

export const { showModal, hideModal } = successSlice.actions;

export default successSlice.reducer;