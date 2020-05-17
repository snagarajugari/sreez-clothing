import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.util";

const INITIAL_STATE = {
  hidden: true,
  "cart-items": [],
};
const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        "cart-items": addItemToCart(state["cart-items"], action.payload),
      };
  }
};

export default CartReducer;
