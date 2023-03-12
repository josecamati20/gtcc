import express from "express";
import { getAllProvincias } from "../controllers/provincia.js";
const router = express.Router();

router.get("/", getAllProvincias);

export default router;
