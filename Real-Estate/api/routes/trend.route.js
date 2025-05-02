import express from "express";
import { getPredictedTrends } from "../controllers/trend.controller.js";

const router = express.Router();

router.post("/predict", getPredictedTrends); // ✅ Ensure "/predict" route exists

export default router;
