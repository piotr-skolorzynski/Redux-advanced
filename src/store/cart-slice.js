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

            if (itemIndex < 0) {
                const item = {
                    id: actions.payload.id,
                    title: actions.payload.title,
                    description: actions.payload.description,
                    price: actions.payload.price,
                    quantity: 1,
                    total: actions.payload.price
                }
                state.items.push(item);

                return;
            }

            state.items[itemIndex] = { ...state.items[itemIndex], quantity: state.items[itemIndex].quantity + 1, total: state.items[itemIndex].total + state.items[itemIndex].price }
        },

        increaseItemQuantity(state, actions) {
            const itemIndex = state.items.findIndex(item => item.id === actions.payload.id);

            state.items[itemIndex] = { ...state.items[itemIndex], quantity: state.items[itemIndex].quantity + 1, total: state.items[itemIndex].total + state.items[itemIndex].price }
        },
        decreaseItemQuantity(state, actions) {
            const itemIndex = state.items.findIndex(item => item.id === actions.payload.id);

            if (state.items[itemIndex].quantity === 1) {
                state.items.splice(itemIndex, 1);

                return;
            }

            state.items[itemIndex] = { ...state.items[itemIndex], quantity: state.items[itemIndex].quantity - 1, total: state.items[itemIndex].total - state.items[itemIndex].price }
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