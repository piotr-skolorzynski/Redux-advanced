import { configureStore } from "@reduxjs/toolkit";

import { shopReducer } from "./shop";

const store = configureStore({
    reducer: {
        shop: shopReducer,
    }
});

export default store;