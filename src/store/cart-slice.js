import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui-slice";

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

const sendCartData = (cartData) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification(
            {
                status: 'pending',
                title: 'Sending...',
                message: "Sending cart data!"
            }
        ));

        try {
            await fetch('https://order-food-app-schwarzmuller-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cartData)
                }
            );

            dispatch(uiActions.showNotification({
                status: 'success', title: 'Success!', message: "Sent cart data successfully!"
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error', title: 'Error!', message: "Sending cart data failed!"
            }));
        }
    }
}

const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;

export { cartReducer, cartActions, sendCartData };
