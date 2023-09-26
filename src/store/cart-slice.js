import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items: [],
    totalQuantity: 0
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
                state.totalQuantity++;

                return;
            }

            state.items[itemIndex] = { ...state.items[itemIndex], quantity: state.items[itemIndex].quantity + 1, total: state.items[itemIndex].total + state.items[itemIndex].price };
            state.totalQuantity++;
        },

        increaseItemQuantity(state, actions) {
            const itemIndex = state.items.findIndex(item => item.id === actions.payload.id);

            state.items[itemIndex] = { ...state.items[itemIndex], quantity: state.items[itemIndex].quantity + 1, total: state.items[itemIndex].total + state.items[itemIndex].price };
            state.totalQuantity++;
        },
        decreaseItemQuantity(state, actions) {
            const itemIndex = state.items.findIndex(item => item.id === actions.payload.id);

            if (state.items[itemIndex].quantity === 1) {
                state.items.splice(itemIndex, 1);
                state.totalQuantity--;

                return;
            }

            state.items[itemIndex] = { ...state.items[itemIndex], quantity: state.items[itemIndex].quantity - 1, total: state.items[itemIndex].total - state.items[itemIndex].price };
            state.totalQuantity--;
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