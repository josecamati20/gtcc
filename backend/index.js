import express from "express";
import cors from "cors";
import cursosRouter from "./routes/curso.js";
import tutoresRouter from "./routes/tutor.js";
import alunosRouter from "./routes/aluno.js";
import projetosRouter from "./routes/projeto.js";
import estadosRouter from "./routes/estado.js";
import estados_projetosRouter from "./routes/estado_projeto.js";
import especializacoesRouter from "./routes/especializacao.js";
import grausRouter from "./routes/grau.js";
import provinciasRouter from "./routes/provincia.js";
import municipiosRouter from "./routes/municipio.js";
import atividadeRouter from "./routes/atividade.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/tcc/v1/cursos", cursosRouter);
app.use("/tcc/v1/tutores", tutoresRouter);
app.use("/tcc/v1/alunos", alunosRouter);
app.use("/tcc/v1/projetos", projetosRouter);
app.use("/tcc/v1/estados", estadosRouter);
app.use("/tcc/v1/estados_projetos", estados_projetosRouter);
app.use("/tcc/v1/especialidades", especializacoesRouter);
app.use("/tcc/v1/graus", grausRouter);
app.use("/tcc/v1/provincias", provinciasRouter);
app.use("/tcc/v1/municipios", municipiosRouter);
app.use("/tcc/v1/atividades", atividadeRouter);
app.listen(3000, () => {
  console.log("backend running on port 3000");
});
