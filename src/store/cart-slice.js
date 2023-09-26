import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items: [],
    totalQuantity: 0,
    changed: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItem(state, action) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            state.totalQuantity++;
            state.changed = true;

            if (itemIndex < 0) {
                const item = {
                    id: action.payload.id,
                    title: action.payload.title,
                    description: action.payload.description,
                    price: action.payload.price,
                    quantity: 1,
                    total: action.payload.price
                }
                state.items.push(item);

                return;
            }

            state.items[itemIndex] = { ...state.items[itemIndex], quantity: state.items[itemIndex].quantity + 1, total: state.items[itemIndex].total + state.items[itemIndex].price };
        },

        increaseItemQuantity(state, action) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            state.changed = true;
            state.totalQuantity++;

            state.items[itemIndex] = { ...state.items[itemIndex], quantity: state.items[itemIndex].quantity + 1, total: state.items[itemIndex].total + state.items[itemIndex].price };
        },
        decreaseItemQuantity(state, action) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            state.totalQuantity--;
            state.changed = true;

            if (state.items[itemIndex].quantity === 1) {
                state.items.splice(itemIndex, 1);

                return;
            }

            state.items[itemIndex] = { ...state.items[itemIndex], quantity: state.items[itemIndex].quantity - 1, total: state.items[itemIndex].total - state.items[itemIndex].price };
        }
    }
});

const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;

export { cartReducer, cartActions };
