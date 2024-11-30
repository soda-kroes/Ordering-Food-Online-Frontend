import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import menuItemReducer from "./Menu/Reducer";
import cartReducer from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import restaurantsOrderReducer from "./Restaurant Order/Reducer";
import { ingredientReducer } from "./Ingredients/Reducer";
import { authReducer } from "./Authentication/Reducer";
import restaurantReducer from "./Restaurant/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  restaurant: restaurantsOrderReducer,
  menu: menuItemReducer,
  cart: cartReducer,
  order: orderReducer,
  restaurantOrder: restaurantsOrderReducer,
  restaurant: restaurantReducer,
  ingredient: ingredientReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
