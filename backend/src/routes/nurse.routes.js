import express from "express";
import { getNurses } from "../controllers/nurse.controller.js";

const router = express.Router();

router.get("/", getNurses);

export default router;
