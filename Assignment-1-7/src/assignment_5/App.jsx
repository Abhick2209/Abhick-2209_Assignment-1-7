import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />

        <main>
          <section className="hero">
            <span>MODERN SHOPPING EXPERIENCE</span>
            <h1>
              Objects worth <strong>keeping.</strong>
            </h1>
            <p>
              Discover thoughtfully selected products designed to make
              everyday life better.
            </p>
          </section>

          <ProductList />
          <Cart />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;