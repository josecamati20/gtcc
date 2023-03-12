import { configureStore } from "@reduxjs/toolkit";
import cursosReducer from "./feactures/cursosSlice";
import tutoresReducer from "./feactures/tutoresSlice";
import alunosReducer from "./feactures/alunosSlice";
import searchReducer from "./feactures/searchSlice";
import projetosReducer from "./feactures/projetosSlice";

export const store = configureStore({
  reducer: {
    cursos: cursosReducer,
    tutores: tutoresReducer,
    alunos: alunosReducer,
    search: searchReducer,
    projetos: projetosReducer
  },
});
