import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const isCartVisible = useSelector(state => state.ui.isCartVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  const sendCartData = async () => {
    dispatch(uiActions.showNotification(
      {
        status: 'pending', title: 'Sending...', message: "Sending cart data!"
      }
    ));

    await fetch('https://order-food-app-schwarzmuller-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart)
      }
    );

    dispatch(uiActions.showNotification({
      status: 'success', title: 'Success!', message: "Sent cart data successfully!"
    }));
  }

  useEffect(() => {
    if (isInitial) {
      isInitial = false;

      return;
    }

    sendCartData().catch((err) => {
      dispatch(uiActions.showNotification({
        status: 'error', title: 'Error!', message: "Sending cart data failed!"
      }));
    });
  }, [cart, dispatch])

  return (
    <>
      { notification && <Notification status={ notification.status } title={ notification.title } message={ notification.message } /> }
      <Layout>
        { isCartVisible && <Cart /> }
        <Products />
      </Layout>
    </>
  );
}

export default App;
