import { configureStore } from "@reduxjs/toolkit";

import { shopReducer } from "./shop-slice";
import { cartReducer } from "./cart-slice";
import { uiReducer } from "./ui-slice";

const store = configureStore({
    reducer: {
        shop: shopReducer,
        cart: cartReducer,
        ui: uiReducer,
    }
});

export default store;