import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user-reducer";
import CartReducer from "./cart/cart-reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export default persistReducer(persistConfig, rootReducer);
