import express from "express";
import { requestShift } from "../controllers/schedule.controller.js";

const router = express.Router();

router.post("/request", requestShift);

export default router;
