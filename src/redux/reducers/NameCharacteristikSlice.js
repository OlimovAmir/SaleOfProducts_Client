import { createSlice } from '@reduxjs/toolkit';

const nameCharacteristikSlice = createSlice({
  name: 'nameCharacteristik',
  initialState: {
    show: false,
  },
  reducers: {
    showModalNameCharacteristik: state => {
      state.show = true;
    },
    hideModalNameCharacteristik: state => {
      state.show = false;
    },
  },
});

export const { showModalNameCharacteristik, hideModalNameCharacteristik } = nameCharacteristikSlice.actions;

export default nameCharacteristikSlice.reducer;