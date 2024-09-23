import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  function handleClick(id, amount) {
    dispatch(cartActions.updateItem({ productId: id, amount }));
  }

  const { id, title, quantity, total, price } = props.item;
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleClick(id, -1)}>-</button>
          <button onClick={() => handleClick(id, 1)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
