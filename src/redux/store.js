import { configureStore } from "@reduxjs/toolkit";

import filterReducer from "./filter";
import pizzaCounterReducer from "./pizzaCounter";

export const store = configureStore({
  reducer: { filter: filterReducer, pizzaCounter: pizzaCounterReducer },
});
