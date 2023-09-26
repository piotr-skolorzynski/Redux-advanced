import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addItem(state, actions) {
            const itemIndex = state.items.findIndex(item => item.id === actions.payload.id);

            if (itemIndex) {
                const item = state.items[itemIndex];
                item = { ...item, quantity: item.quantity + 1, total: item.total + item.price }

                return;
            }

            state.items.push({ ...actions.payload.item, quantity: 1, total: actions.payload.item.price });
        },

        increaseItemQuantity(state, actions) {
            const itemIndex = state.items.findIndex(item => item.id === actions.payload.id);
            const item = state.items[itemIndex];

            item = { ...item, quantity: item.quantity + 1, total: item.total + item.price }
        },
        decreaseItemQuantity(state, actions) {
            const itemIndex = state.items.findIndex(item => item.id === actions.payload.id);
            const item = state.items[itemIndex];

            if (item.quantity === 1) {
                state.items.splice(itemIndex, 1);

                return;
            }

            item = { ...item, quantity: item.quantity - 1, total: item.total - item.price }
        }
    }
});

const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;

export { cartReducer, cartActions };

//cartItem
// {
//     id, title, price, description, quantity, total
// }