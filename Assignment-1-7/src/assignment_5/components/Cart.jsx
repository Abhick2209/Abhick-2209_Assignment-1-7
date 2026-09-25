import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

function Cart() {
  const { cart } = useCart();

  return (
    <section className="cart-section">
      <div className="section-heading cart-heading">
        <div>
          <span className="eyebrow">SHOPPING BAG</span>
          <h2>Your cart</h2>
        </div>

        <span className="cart-label">
          {cart.length} {cart.length === 1 ? "PRODUCT" : "PRODUCTS"}
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-icon">◫</div>

          <span>YOUR CART IS EMPTY</span>

          <h3>Nothing here yet.</h3>

          <p>
            Explore our collection and add something you love to
            your shopping bag.
          </p>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <OrderSummary />
        </div>
      )}
    </section>
  );
}

export default Cart;