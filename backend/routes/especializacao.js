import express from "express";
import { getAllEspecializaoes } from "../controllers/especializacao.js";

const router = express.Router();

router.get("/", getAllEspecializaoes);

export default router;
