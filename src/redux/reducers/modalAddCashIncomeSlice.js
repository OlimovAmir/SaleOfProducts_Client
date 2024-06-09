import { createSlice } from '@reduxjs/toolkit';

export const modalAddCashIncomeSlice = createSlice({
  name: 'addCashIncome',
  initialState: {
    showModalAddCashIncome: false,
  },
  reducers: {
    showModalAddCashIncome: (state) => {
      state.showModalAddCashIncome = true;
    },
    closeModalAddCashIncome: (state) => {
      state.showModalAddCashIncome = false;
    }
  }
});

export const { showModalAddCashIncome, closeModalAddCashIncome } = modalAddCashIncomeSlice.actions;

export default modalAddCashIncomeSlice.reducer;