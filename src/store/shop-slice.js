import { createSlice } from "@reduxjs/toolkit";

const initialShopState = {
    items: [
        { id: "m1", title: 'Test1', price: 6, description: 'This is a first product - amazing!' },
        { id: "m2", title: 'Test2', price: 4, description: 'This is a second product - amazing!' },
        { id: "m3", title: 'Test3', price: 9, description: 'This is a third product - amazing!' }
    ]
};

const shopSlice = createSlice({
    name: 'shop',
    initialState: initialShopState,
    reducers: {}
});

const shopReducer = shopSlice.reducer;
const shopActions = shopSlice.actions;

export { shopReducer, shopActions };


