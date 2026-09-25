import { useState } from "react";
import { useCart } from "../context/CartContext";

function OrderSummary() {
  const {
    subtotal,
    discount,
    gst,
    grandTotal,
    coupon,
    applyCoupon,
    removeCoupon,
  } = useCart();

  const [couponCode, setCouponCode] = useState("");
  const [couponMessage, setCouponMessage] = useState("");

  const handleCoupon = () => {
    const code = couponCode.trim().toUpperCase();

    if (code === "NOVA10") {
      applyCoupon({
        code: "NOVA10",
        discount: 10,
      });

      setCouponMessage("10% discount applied");
      return;
    }

    if (code === "SAVE15") {
      applyCoupon({
        code: "SAVE15",
        discount: 15,
      });

      setCouponMessage("15% discount applied");
      return;
    }

    setCouponMessage("Invalid coupon code");
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    setCouponCode("");
    setCouponMessage("");
  };

  return (
    <aside className="summary-card">
      <div className="summary-top">
        <div>
          <span className="eyebrow">YOUR ORDER</span>
          <h2>Summary</h2>
        </div>

        <div className="summary-icon">↗</div>
      </div>

      <div className="coupon-box">
        <div className="coupon-title">
          <span>◇</span>
          <div>
            <strong>Have a coupon?</strong>
            <small>Apply your promo code</small>
          </div>
        </div>

        {!coupon ? (
          <div className="coupon-input">
            <input
              type="text"
              placeholder="Enter code"
              value={couponCode}
              onChange={(event) => setCouponCode(event.target.value)}
            />

            <button onClick={handleCoupon}>Apply</button>
          </div>
        ) : (
          <div className="coupon-applied">
            <div>
              <strong>{coupon.code}</strong>
              <span>{coupon.discount}% OFF</span>
            </div>

            <button onClick={handleRemoveCoupon}>×</button>
          </div>
        )}

        {couponMessage && !coupon && (
          <p className="coupon-message">{couponMessage}</p>
        )}
      </div>

      <div className="price-breakdown">
        <div>
          <span>Subtotal</span>
          <strong>₹{subtotal.toLocaleString("en-IN")}</strong>
        </div>

        <div>
          <span>Discount</span>
          <strong className="discount">
            − ₹{discount.toLocaleString("en-IN")}
          </strong>
        </div>

        <div>
          <span>GST <small>(18%)</small></span>
          <strong>₹{gst.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
          })}</strong>
        </div>
      </div>

      <div className="summary-divider"></div>

      <div className="grand-total">
        <div>
          <span>Total amount</span>
          <small>Inclusive of GST</small>
        </div>

        <strong>
          ₹
          {grandTotal.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
          })}
        </strong>
      </div>

      <button className="checkout-button">
        Proceed to checkout
        <span>→</span>
      </button>

      <div className="checkout-note">
        <span>✓</span>
        Secure payment · Free delivery
      </div>
    </aside>
  );
}

export default OrderSummary;