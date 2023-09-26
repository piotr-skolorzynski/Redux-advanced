import { useSelector } from 'react-redux';

import classes from './Cart.module.css';
import Card from '../UI/Card';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items)

  if (!cartItems.length) {
    return (
      <Card className={ classes.cart }>
        <p>No products in a cart</p>
      </Card>
    )
  }

  return (
    <Card className={ classes.cart }>
      <>
        <h2>Your Shopping Cart</h2>
        <ul>
          { cartItems.map((cartItem) => {
            return <CartItem
              key={ cartItem.id }
              title={ cartItem.title }
              quantity={ cartItem.quantity }
              total={ cartItem.total }
              price={ cartItem.price }
            />
          }) }
        </ul>
      </>
    </Card>
  );
};

export default Cart;
