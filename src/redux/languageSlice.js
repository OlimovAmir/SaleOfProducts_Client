import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: 'en' // Пусть по умолчанию будет английский язык
  },
  reducers: {
    toggleLanguage: state => {
      state.value = state.value === 'en' ? 'ru' : 'en'; // Переключаем язык между английским и русским
    }
  }
});

export const { toggleLanguage } = languageSlice.actions;

export default languageSlice.reducer;