import PropType from "prop-types";
import styles from "./ProductDescription.module.css";

function ProductDescription({ product }) {
  const { name, description, price, off } = product;
  const afterPrice = off ? (price * off).toFixed(2) : "";

  return (
    <div className={styles.product}>
      <span className={styles.productLabel}>SNEAKERS COMPANY</span>
      <h2>{name}</h2>
      <p className={styles.productText}>{description}</p>

      <div className={styles.productPrice}>
        <p className={styles.productCurrPrice}>
          ${afterPrice ? afterPrice : price.toFixed(2)}{" "}
          <span>{off ? `${off * 100}%` : ""}</span>
        </p>
        <p className={styles.productMainPrice}>
          {afterPrice ? `$${price.toFixed(2)}` : ""}
        </p>
      </div>
    </div>
  );
}

ProductDescription.propTypes = {
  product: PropType.any,
};

export default ProductDescription;
