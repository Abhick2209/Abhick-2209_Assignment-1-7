import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <section className="products-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">THE COLLECTION</span>
          <h2>Featured products</h2>
        </div>

        <span className="product-count">
          {products.length.toString().padStart(2, "0")} ITEMS
        </span>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;