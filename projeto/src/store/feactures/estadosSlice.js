import { createSlice } from "@reduxjs/toolkit";

const estadosSlice = createSlice({
  name: "estados",
  initialState: {
    estados: [],
  },
  reducers: {
    addEstados: (state, action) => {
      state.estados = action.payload;
    },
  },
});

export default estadosSlice.reducer;
export const { addEstados } = estadosSlice.actions;
