import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = ({ id, title, quantity, total, price }) => {
  const dispatch = useDispatch();

  const increaseQuantity = () => dispatch(cartActions.increaseItemQuantity({ id }));
  const decreaseQuantity = () => dispatch(cartActions.decreaseItemQuantity({ id }));

  return (
    <li className={ classes.item }>
      <header>
        <h3>{ title }</h3>
        <div className={ classes.price }>
          ${ total.toFixed(2) }{ ' ' }
          <span className={ classes.itemprice }>(${ price.toFixed(2) }/item)</span>
        </div>
      </header>
      <div className={ classes.details }>
        <div className={ classes.quantity }>
          x <span>{ quantity }</span>
        </div>
        <div className={ classes.actions }>
          <button onClick={ decreaseQuantity }>-</button>
          <button onClick={ increaseQuantity }>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
