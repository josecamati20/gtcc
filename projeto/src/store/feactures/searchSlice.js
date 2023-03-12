import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchValue: "",
  },
  reducers: {
    addSearchValue: (state, action) => {
      state.searchValue = action.payload;
      console.log("vslor do search ", action.payload);
    },
  },
});

export default searchSlice.reducer;
export const { addSearchValue } = searchSlice.actions;
