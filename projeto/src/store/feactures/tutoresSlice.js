import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllTutores = createAsyncThunk("tutores/getAllTutores", () => {
  return fetch("http://localhost:3000/tcc/v1/tutores")
    .then((res) => res.json())
    .catch((error) => console.log("meu erro ", error));
});
const tutoresSlice = createSlice({
  name: "tutores",
  initialState: {
    payload: [],
    isLoading: false,
    error: false,
  },

  extraReducers: {
    [getAllTutores.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllTutores.fulfilled]: (state, action) => {
      state.payload = action.payload.payload;
      state.isLoading = false;
    },
    [getAllTutores.rejected]: (state, action) => {
      state.payload = null;
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default tutoresSlice.reducer;
