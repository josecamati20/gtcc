import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllProjetos = createAsyncThunk(
  "projetos/getAllProjetos",
  () => {
    return fetch("http://localhost:3000/tcc/v1/projetos")
      .then((res) => res.json())
      .catch((error) => console.log("meu erro ", error));
  }
);
const projetosSlice = createSlice({
  name: "projetos",
  initialState: {
    payload: [],
    isLoading: false,
    error: false,
  },
  extraReducers: {
    [getAllProjetos.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllProjetos.fulfilled]: (state, action) => {
      state.payload = action.payload.payload;
      state.isLoading = false;
      console.log("meu payload dos projetos", state.payload);
    },
    [getAllProjetos.rejected]: (state, action) => {
      state.payload = null;
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default projetosSlice.reducer;
