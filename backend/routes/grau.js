import express from "express";
import { getAllGraus } from "../controllers/grau.js";

const router = express.Router();

router.get("/", getAllGraus);

export default router;
