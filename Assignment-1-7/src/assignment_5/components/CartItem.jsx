import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="cart-item-details">
        <span>{item.category}</span>
        <h3>{item.name}</h3>

        <div className="cart-item-price">
          ₹{item.price.toLocaleString("en-IN")}
        </div>

        <div className="quantity-control">
          <button onClick={() => decreaseQuantity(item.id)}>
            −
          </button>

          <strong>{item.quantity}</strong>

          <button onClick={() => increaseQuantity(item.id)}>
            +
          </button>
        </div>
      </div>

      <div className="cart-item-right">
        <strong>
          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
        </strong>

        <button
          className="remove-button"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;