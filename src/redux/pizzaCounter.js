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
      state.value -= 1;
    },
  },
});

export const { addPizza, removePizza } = pizzaCounterSlice.actions;

export default pizzaCounterSlice.reducer;
