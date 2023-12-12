import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  category: null,
  sortBy: "popular",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: { value: initialStateValue },
  reducers: {
    setCategory: (state, action) => {
      state.value.category = action.payload;
    },

    setSortOrder: (state, action) => {
      state.value.sortBy = action.payload;
    },
  },
});

export const { setCategory, setSortOrder } = filterSlice.actions;

export default filterSlice.reducer;
