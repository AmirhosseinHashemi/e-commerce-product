import { useState } from "react";
import PropType from "prop-types";

import ProductOne from "../../assets/images/image-product-1.jpg";
import ProductTwo from "../../assets/images/image-product-2.jpg";
import ProductThree from "../../assets/images/image-product-3.jpg";
import ProductFour from "../../assets/images/image-product-4.jpg";

import ThumbOne from "../../assets/images/image-product-1-thumbnail.jpg";
import ThumbTwo from "../../assets/images/image-product-2-thumbnail.jpg";
import ThumbThree from "../../assets/images/image-product-3-thumbnail.jpg";
import ThumbFour from "../../assets/images/image-product-4-thumbnail.jpg";

function ProductCarousel({ setModal }) {
  const [activeImg, setActiveImg] = useState(0);
  const images = [ProductOne, ProductTwo, ProductThree, ProductFour];
  const thumb = [ThumbOne, ThumbTwo, ThumbThree, ThumbFour];
  const maxSlide = images.length;

  function handleChangeActive(goTo) {
    if (goTo === "next" && activeImg < maxSlide - 1)
      setActiveImg((preVal) => preVal + 1);

    if (goTo === "pre" && activeImg > 0) setActiveImg((preVal) => preVal - 1);
  }

  return (
    <div className="carousel">
      <figure
        onClick={() => setModal((preVal) => !preVal)}
        className="carouselMainImg"
      >
        <img src={images[activeImg]} alt="shoe" />
      </figure>

      <div className="carouselThumbnails">
        {thumb.map((imgSrc, i) => (
          <button
            className="carouselThumb"
            key={imgSrc}
            onClick={() => setActiveImg(i)}
          >
            <img src={imgSrc} alt={`thumbnail${i}`} />
          </button>
        ))}
      </div>

      <button
        onClick={() => handleChangeActive("pre")}
        className="carouselBtn carouselBtn--left"
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
        className="carouselBtn carouselBtn--right"
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

ProductCarousel.propTypes = {
  setModal: PropType.func,
};

export default ProductCarousel;
