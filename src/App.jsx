import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <ProductCarousel />
      </Main>
    </>
  );
}

export default App;
