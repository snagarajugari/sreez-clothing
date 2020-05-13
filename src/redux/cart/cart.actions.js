import CartActionTypes from "./cart.types";

const toggleCartHidden = () => {
  console.log(CartActionTypes.TOGGLE_CART_HIDDEN);
  return { type: CartActionTypes.TOGGLE_CART_HIDDEN };
};

export default toggleCartHidden;
