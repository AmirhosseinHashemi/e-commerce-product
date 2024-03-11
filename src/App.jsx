import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Product from "./components/Product/Product";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <ProductCarousel />
        <Product />
      </Main>
    </>
  );
}

export default App;
