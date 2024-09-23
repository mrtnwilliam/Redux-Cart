import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(uiActions.toggleCart())
  const cartNum = useSelector(state => state.cart.numOfItems)

  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartNum}</span>
    </button>
  );
};

export default CartButton;
