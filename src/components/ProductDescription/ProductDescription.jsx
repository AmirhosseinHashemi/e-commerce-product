import styles from "./ProductDescription.module.css";

// we can make this component reusable but in this project it's not neccessary
function ProductDescription() {
  return (
    <div className={styles.product}>
      <span className={styles.productLabel}>SNEAKERS COMPANY</span>
      <h2>Fall Limited Edition Sneakers</h2>
      <p className={styles.productText}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className={styles.productPrice}>
        <p className={styles.productCurrPrice}>
          $125.00 <span>50%</span>
        </p>
        <p className={styles.productMainPrice}>$250.00</p>
      </div>
    </div>
  );
}

export default ProductDescription;
