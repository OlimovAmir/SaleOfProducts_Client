import { createSlice } from '@reduxjs/toolkit';

const successSlice = createSlice({
  name: 'success',
  initialState: {
    show: false,
  },
  reducers: {
    showModalSuccess: state => {
      state.show = true;
    },
    hideModal: state => {
      state.show = false;
    },
  },
});

export const { showModalSuccess, hideModal } = successSlice.actions;

export default successSlice.reducer;