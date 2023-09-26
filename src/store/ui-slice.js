import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
    isCartVisible: false,
    notification: null,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        toggle(state, _) {
            state.isCartVisible = !state.isCartVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }
});

const uiReducer = uiSlice.reducer;
const uiActions = uiSlice.actions;

export { uiReducer, uiActions };