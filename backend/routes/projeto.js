import express from "express";
import {
  addProjeto,
  deleteProjeto,
  getAllProjetos,
  getProjetosById,
  getProjetosByTutorId,
  updateProjetoById,
} from "../controllers/projeto.js";

const router = express.Router();

router.get("/:id", getProjetosById);
router.get("/", getAllProjetos);
router.post("/", addProjeto);
router.get("/tutor/:id", getProjetosByTutorId);
router.delete("/:id", deleteProjeto);
router.put("/:id", updateProjetoById);
export default router;
