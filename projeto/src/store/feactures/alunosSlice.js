import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllAlunos = createAsyncThunk(
  "alunos/getAllAlunos",
  async () => {
    return fetch("http://localhost:3000/tcc/v1/alunos")
      .then((res) => res.json())
      .catch((error) => console.log("meu erro ", error));
  }
);
const alunosSlice = createSlice({
  name: "alunos",
  initialState: {
    payload: [],
    isLoading: false,
    error: false,
  },
  extraReducers: {
    [getAllAlunos.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllAlunos.fulfilled]: (state, action) => {
      state.payload = action.payload.payload;
      state.isLoading = false;
    },
    [getAllAlunos.rejected]: (state, action) => {
      state.payload = null;
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default alunosSlice.reducer;
