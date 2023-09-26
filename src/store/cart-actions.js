import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

const fetchCartData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('https://order-food-app-schwarzmuller-default-rtdb.europe-west1.firebasedatabase.app/cart.json');
            const cartData = await response.json();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [], //jeżeli wyczyścimy cały koszyk to ustaw pustą tablicę tak żeby zawsze pracować na tablicy i nie otrzymać undefined
                totalQuantity: cartData.totalQuantity
            }))

        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error', title: 'Error!', message: "Fetching cart data failed!"
            }));
        }
    }
}

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

export { fetchCartData, sendCartData }