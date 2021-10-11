import express from "express";

import { getTest, postPatient } from "../controllers/routerLogic.js";
import { getAdmin, createAdmin } from "../controllers/adminRouterLogic.js";

const router = express.Router();

router.get("/test", getTest);
router.post("/newpatient", postPatient);
router.get("/admin", getAdmin); 
router.post("/createAdmin", createAdmin); 

export default router;
