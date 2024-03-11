import { useState } from "react";
import styles from "./ProductCarousel.module.css";

import ProductOne from "../../assets/images/image-product-1.jpg";
import ProductTwo from "../../assets/images/image-product-2.jpg";
import ProductThree from "../../assets/images/image-product-3.jpg";
import ProductFour from "../../assets/images/image-product-4.jpg";

function ProductCarousel() {
  const [activeImg, setActiveImg] = useState(0);
  const images = [ProductOne, ProductTwo, ProductThree, ProductFour];
  const maxSlide = images.length;

  function handleChangeActive(goTo) {
    if (goTo === "next" && activeImg < maxSlide - 1)
      setActiveImg((preVal) => preVal + 1);

    if (goTo === "pre" && activeImg > 0) setActiveImg((preVal) => preVal - 1);
  }

  return (
    <div className={styles.productCarousel}>
      <figure className={styles.productContainer}>
        <img src={images[activeImg]} alt="shoe" />
      </figure>

      <button
        onClick={() => handleChangeActive("pre")}
        className={`${styles.btn} ${styles["btn--left"]}`}
      >
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>

      <button
        onClick={() => handleChangeActive("next")}
        className={`${styles.btn} ${styles["btn--right"]}`}
      >
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default ProductCarousel;