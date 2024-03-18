import { createSlice } from '@reduxjs/toolkit';

const successSlice = createSlice({
  name: 'success', // Имя вашего среза состояния
  initialState: {
    successMessage: null,
  },
  reducers: {
    setSuccessMessage(state, action) {
      state.successMessage = action.payload;
    },
  },
});

export const { setSuccessMessage } = successSlice.actions;
export default successSlice.reducer;