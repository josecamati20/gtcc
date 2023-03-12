import express from "express";
import {
  addTutor,
  deleteTutor,
  getAllTutores,
  getTutorById,
  updateTutorById,
} from "../controllers/tutor.js";

const router = express.Router();

router.get("/", getAllTutores);
router.get("/:id", getTutorById);
router.post("/:id", updateTutorById);
router.put("/add/", addTutor);
router.delete("/apagar/:id", deleteTutor);
export default router;
