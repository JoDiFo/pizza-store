import { configureStore } from "@reduxjs/toolkit";

import filterReducer from "./filter";
import pizzaCounterReducer from "./pizzaStorageSlice";

export const store = configureStore({
  reducer: { filter: filterReducer, pizzaStorage: pizzaCounterReducer },
});
