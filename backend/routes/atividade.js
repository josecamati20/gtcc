import express from "express";
import { getAllAtividades } from "../controllers/atividade.js";


const router = express.Router();

router.get("/", getAllAtividades);

export default router;
