import express from "express";

import { getTest } from "../controllers/routerLogic.js";
import { postPatient } from "../controllers/admin/adminEndpoints.js";

const router = express.Router();

router.get("/test", getTest);
router.get("/newpatient", postPatient);

export default router;
