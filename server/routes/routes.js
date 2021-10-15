import express from "express";

import { getTest } from "../controllers/routerLogic.js";
import {
  postPatient,
  getPatients,
} from "../controllers/admin/adminEndpoints.js";

const router = express.Router();

router.get("/test", getTest);
router.get("/newpatient", postPatient);
router.get("/getpatients", getPatients);


export default router;