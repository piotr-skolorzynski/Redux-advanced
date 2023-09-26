import { configureStore } from "@reduxjs/toolkit";

import { shopReducer } from "./shop-slice";
import { cartReducer } from "./cart-slice";

const store = configureStore({
    reducer: {
        shop: shopReducer,
        cart: cartReducer,
    }
});

export default store;