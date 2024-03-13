import { useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Product from "./components/Product/Product";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import Wrapper from "./components/Wrapper/Wrapper";
import Modal from "./components/Modal/Modal";

const productInfo = {
  name: "Fall Limited Edition Sneakers",
  description: `These low-profile sneakers are your perfect casual wear companion.
  Featuring a durable rubber outer sole, they’ll withstand everything the
  weather can offer.`,
  price: 250.0,
  off: 0.5,
};

function App() {
  const [cart, setCart] = useState({});
  const [modal, setModal] = useState(false);
  const product = { ...productInfo };

  return (
    <>
      <Wrapper>
        <Header cart={cart} setCart={setCart}></Header>
        <Main>
          <ProductCarousel setModal={setModal} />
          <Product product={product} setCart={setCart} />
          {modal && (
            <Modal setModal={setModal}>
              <ProductCarousel />
            </Modal>
          )}
        </Main>
      </Wrapper>
    </>
  );
}

export default App;
