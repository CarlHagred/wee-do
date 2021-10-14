import express from "express";

import { getTest } from "../controllers/routerLogic.js";
import { postPatient } from "../controllers/admin/adminEndpoints.js";
import { logInPatient } from "../controllers/routerLogic.js";

const router = express.Router();

router.get("/test", getTest);
router.post("/newpatient", postPatient);
router.post("/loginPatient", logInPatient)

export default router;