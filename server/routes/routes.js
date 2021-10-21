import express from "express";
import passport from "passport";


import { getTest } from "../controllers/routerLogic.js";
import {
  postPatient,
  getPatients,
} from "../controllers/admin/adminEndpoints.js";

import { loginPatient, getSession, deleteSession } from "../controllers/patient/patientEndpoints.js";

const router = express.Router();

router.get("/test", getTest);
router.get("/newpatient", postPatient);
router.get("/getpatients", getPatients);
router.post("/loginpatient", loginPatient);
router.get("/getsession", getSession);
router.delete("/logoutpatient", deleteSession)

export default router;
