import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} />

        <span className="product-category">{product.category}</span>

        <button
          className="quick-add"
          onClick={() => addToCart(product)}
          aria-label={`Add ${product.name} to cart`}
        >
          +
        </button>
      </div>

      <div className="product-content">
        <div className="product-rating">
          <span>★★★★★</span>
          <small>Premium</small>
        </div>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-bottom">
          <div className="product-price">
            <span>₹</span>
            {product.price.toLocaleString("en-IN")}
          </div>

          <button
            className="add-button"
            onClick={() => addToCart(product)}
          >
            Add to cart
            <span>→</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;