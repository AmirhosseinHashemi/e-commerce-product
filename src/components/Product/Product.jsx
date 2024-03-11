import AddToCart from "../AddToCart/AddToCart";
import Counter from "../Counter/Counter";
import ProductDescription from "../ProductDescription/ProductDescription";

import styles from "./Product.module.css";

function Product() {
  return (
    <section className={styles.product}>
      <ProductDescription />
      <Counter />
      <AddToCart />
    </section>
  );
}

export default Product;
