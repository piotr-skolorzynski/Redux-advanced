import { useSelector } from 'react-redux';

import classes from './CartButton.module.css';

const CartButton = () => {
  const numberOfCartItems = useSelector(state => state.cart.items.length)

  return (
    <button className={ classes.button }>
      <span>My Cart</span>
      <span className={ classes.badge }>{ numberOfCartItems }</span>
    </button>
  );
};

export default CartButton;
