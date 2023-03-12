import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllCursos = createAsyncThunk("cursos/getAllCursos", () => {
  return fetch("http://localhost:3000/tcc/v1/cursos")
    .then((res) => res.json())
    .catch((error) => console.log("meu erro ", error));
});
const cursosSlice = createSlice({
  name: "cursos",
  initialState: {
    payload: [],
    isLoading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getAllCursos.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllCursos.fulfilled]: (state, action) => {
      state.payload = action.payload.payload;
      state.isLoading = false;
    
    },
    [getAllCursos.rejected]: (state, action) => {
      state.payload = null;
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default cursosSlice.reducer;
//export const {} = cursosSlice.actions;
