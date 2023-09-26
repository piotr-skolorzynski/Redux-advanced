import { useSelector, useDispatch } from 'react-redux';

import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = () => {
  const numberOfCartItems = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleCart = () => dispatch(uiActions.toggle())

  return (
    <button className={ classes.button } onClick={ toggleCart }>
      <span>My Cart</span>
      <span className={ classes.badge }>{ numberOfCartItems }</span>
    </button>
  );
};

export default CartButton;
