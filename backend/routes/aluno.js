import express from "express";
import {
  addAluno,
  deleteAluno,
  getAllAlunos,
  getAlunoById,
  getAlunoByProjectoId,
  updateAlunoById,
} from "../controllers/aluno.js";

const router = express.Router();

router.get("/", getAllAlunos);
router.get("/:id", getAlunoById);
router.get("/projeto/:id", getAlunoByProjectoId);
router.post("/editar/:id", updateAlunoById);
router.put("/add", addAluno);
router.delete("/apagar/:id", deleteAluno);
export default router;
