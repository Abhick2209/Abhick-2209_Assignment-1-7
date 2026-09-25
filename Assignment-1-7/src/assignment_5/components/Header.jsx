import { useCart } from "../context/CartContext";

function Header() {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <div className="brand">
        <div className="brand-mark">N</div>

        <div>
          <h1>NOVA</h1>
          <span>CURATED COMMERCE</span>
        </div>
      </div>

      <div className="header-right">
        <div className="secure-badge">
          <span></span>
          Secure checkout
        </div>

        <div className="cart-indicator">
          <span className="cart-symbol">◫</span>
          <span>Cart</span>
          <strong>{cartCount}</strong>
        </div>
      </div>
    </header>
  );
}

export default Header;