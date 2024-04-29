import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      isAuthenticated: false,
      
    },
    reducers: {
      login(state) {
        state.isAuthenticated = true;
      },
      logout(state) {
        state.isAuthenticated = false;
        
      },
    },
  });
  
  // Экспортируем action creators
  export const { login, logout } = authSlice.actions;
  
  // Экспортируем reducer
  export default authSlice.reducer;