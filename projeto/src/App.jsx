import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home/Home";

import Login from "./components/pages/Login/Login";
import LeftBar from "./components/LeftBar/LeftBar";
import Tutor from "./components/pages/Tutor/Tutor";

import { getAllAlunos } from "./store/feactures/alunosSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import SingleTutorPage from "./components/pages/SingleTutorPage/SingleTutorPage";
import Aluno from "./components/pages/Aluno/Aluno";
import SingleAlunoPage from "./components/pages/SingleAlunoPage/SingleAlunoPage";
import Projeto from "./components/pages/Projetos/Projetos";
import { getAllProjetos } from "./store/feactures/projetosSlice";
import SingleProjetoPage from "./components/pages/SingleProjetoPage/SingleProjetoPage";
import Atividade from "./components/pages/Atividade/Atividade";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAlunos());
    dispatch(getAllProjetos());
  }, []);
  console.log("meu path:", window.location);
  return (
    <div className="App">
      <Router>
        {!window.location.pathname.includes("login") && <LeftBar />}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/tutores" element={<Tutor />} />
          <Route exact path="/alunos" element={<Aluno />} />
          <Route exact path="/atividades" element={<Atividade />} />
          <Route exact path="/projetos" element={<Projeto />} />
          <Route exact path="/projetos/:id" element={<SingleProjetoPage />} />
          <Route exact path="/alunos/:id" element={<SingleAlunoPage />} />
          <Route exact path="/tutores/:id" element={<SingleTutorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
