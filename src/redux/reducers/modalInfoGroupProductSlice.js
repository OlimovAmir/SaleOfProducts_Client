import { createSlice } from '@reduxjs/toolkit';

export const modalInfoGroupProductSlice = createSlice({
    name: 'infoGroupProduct',
    initialState: {
        showModalInfo: false,
        selectedGroupId: null,
    },
    reducers: {
        showModalInfo: (state, action) => {
            state.showModalInfo = true;
            state.selectedGroupId = action.payload;
        },
        closeModalInfo: (state) => {
            state.showModalInfo = false;
            state.selectedGroupId = null;
        }
    }
});

export const { showModalInfo, closeModalInfo } = modalInfoGroupProductSlice.actions;

export default modalInfoGroupProductSlice.reducer;