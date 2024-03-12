import { useState } from "react";
import PropType from "prop-types";

import AddToCart from "../AddToCart/AddToCart";
import Counter from "../Counter/Counter";
import ProductDescription from "../ProductDescription/ProductDescription";

import styles from "./Product.module.css";

function Product({ product, setCart }) {
  const [num, setNum] = useState(0);

  function handleAddToCart() {
    if (num === 0) return;

    const { name, price, off } = product;
    const newItem = {
      name,
      num,
      price: off ? off * price : price,
      total: num * (off ? off * price : price),
    };

    setCart(newItem);
  }

  return (
    <section className={styles.product}>
      <ProductDescription product={product} />
      <Counter num={num} setNum={setNum} />
      <AddToCart onAddToCart={handleAddToCart} />
    </section>
  );
}

Product.propTypes = {
  product: PropType.object,
  setCart: PropType.func,
};

export default Product;
