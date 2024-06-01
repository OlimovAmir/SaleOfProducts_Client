import { createSlice } from '@reduxjs/toolkit';

export const modalInfoGroupProductSlice = createSlice({
  name: 'infoGroupProduct',
  initialState: {
    showModalInfo: false,
  },
  reducers: {
    showModalInfo: (state) => {
      state.showModalInfo = true;
    },
    closeModalInfo: (state) => {
      state.showModalInfo = false;
    },
  },
});

export const { showModalInfo, closeModalInfo } = modalInfoGroupProductSlice.actions;
export default modalInfoGroupProductSlice.reducer;