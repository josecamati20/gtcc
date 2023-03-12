import express from "express";
import { getAllMunicipios } from "../controllers/municipio.js";


const router = express.Router();

router.get("/", getAllMunicipios);

export default router;
