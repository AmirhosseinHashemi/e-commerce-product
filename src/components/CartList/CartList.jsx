import PropType from "prop-types";
import styles from "./CartList.module.css";
import CartListItem from "../CartListItem/CartListItem";

function CartList({ cart, setCart }) {
  return (
    <div className={styles.cartList}>
      <p className={styles.title}>Cart</p>
      {cart.name ? (
        <CartListItem cart={cart} setCart={setCart} />
      ) : (
        <p className={styles.message}>Your cart is empty</p>
      )}

      {cart.name && <button className="btn">Checkout</button>}
    </div>
  );
}

CartList.propTypes = {
  cart: PropType.object,
  setCart: PropType.func,
};

export default CartList;
