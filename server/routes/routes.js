import express from "express";

import { getTest, postPatient } from "../controllers/routerLogic.js";

const router = express.Router();

router.get("/test", getTest);
router.post("/newpatient", postPatient);

export default router;
