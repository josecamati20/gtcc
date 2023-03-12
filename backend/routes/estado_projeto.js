import express from "express";
import { getAllEstadosProjetos } from "../controllers/estado_projeto.js";


const router = express.Router();

router.get("/", getAllEstadosProjetos);

export default router;
