import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  totalCount: 0,
  totalPrice: 0,
  pizzas: [],
};

const pizzaCounterSlice = createSlice({
  name: "pizzaCounter",
  initialState: { value: initialStateValue },
  reducers: {
    addPizza: (state, action) => {
      state.value.totalCount += 1;

      state.value.totalPrice += action.payload.price;

      if (state.value.pizzas[action.payload.id]) {
        state.value.pizzas[action.payload.id] += 1;
      } else {
        state.value.pizzas[action.payload.id] = 1;
      }
    },

    removePizza: (state, action) => {
      if (state.value.pizzas[action.payload.id] > 0) {
        state.value.totalCount -= 1;

        state.value.totalPrice -= action.payload.price;

        state.value.pizzas[action.payload.id] -= 1;
      }

      // not sure of the next lines of code
      if (state.value.totalCount === 0) {
        state.value = initialStateValue;
      }
    },

    removePizzaType: (state, action) => {
      const pizzasToRemove = state.value.pizzas[action.payload.id];

      state.value.totalCount -= 1 * pizzasToRemove;
      state.value.totalPrice -= action.payload.price * pizzasToRemove;
      state.value.pizzas[action.payload.id] = null;

      // not sure of the next lines of code
      if (state.value.totalCount === 0) {
        state.value = initialStateValue;
      }
    },

    resetCounter: (state, action) => {
      state.value = initialStateValue;
    },
  },
});

export const { addPizza, removePizza, removePizzaType, resetCounter } =
  pizzaCounterSlice.actions;

export default pizzaCounterSlice.reducer;
