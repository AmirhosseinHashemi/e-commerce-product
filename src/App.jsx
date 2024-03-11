import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Product from "./components/Product/Product";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <>
      <Wrapper>
        <Header></Header>
        <Main>
          <ProductCarousel />
          <Product />
        </Main>
      </Wrapper>
    </>
  );
}

export default App;
