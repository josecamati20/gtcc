import express from "express";
import { createCursos, getAllCursos } from "../controllers/curso.js";

const router = express.Router();

router.get("/", getAllCursos);
router.get("/criar", createCursos);

export default router;
