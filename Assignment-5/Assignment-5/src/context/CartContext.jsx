import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
  coupon: null,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exists = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (exists) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }

    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "COUPON":
      return {
        ...state,
        coupon: action.payload,
      };

    case "CLEAR_COUPON":
      return {
        ...state,
        coupon: null,
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE",
      payload: id,
    });
  };

  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECREASE",
      payload: id,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };

  const applyCoupon = (coupon) => {
    dispatch({
      type: "COUPON",
      payload: coupon,
    });
  };

  const removeCoupon = () => {
    dispatch({
      type: "CLEAR_COUPON",
    });
  };

  const cartCount = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = state.coupon
    ? subtotal * state.coupon.discount / 100
    : 0;

  const taxableAmount = subtotal - discount;
  const gst = taxableAmount * 0.18;
  const grandTotal = taxableAmount + gst;

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        coupon: state.coupon,
        cartCount,
        subtotal,
        discount,
        gst,
        grandTotal,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        applyCoupon,
        removeCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}