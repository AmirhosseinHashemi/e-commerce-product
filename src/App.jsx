import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import ProductDescription from "./components/ProductDescription/ProductDescription";

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <ProductCarousel />
        <ProductDescription />
        <Counter />
      </Main>
    </>
  );
}

export default App;
