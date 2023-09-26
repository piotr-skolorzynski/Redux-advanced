import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
    isCartVisible: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        toggle(state, _) {
            state.isCartVisible = !state.isCartVisible;
        }
    }
});

const uiReducer = uiSlice.reducer;
const uiActions = uiSlice.actions;

export { uiReducer, uiActions };