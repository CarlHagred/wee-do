import express from "express";

//import { getTest } from "../controllers/routerLogic.js";
import {
  postPatient,
  getPatients,
  getVideos,
  getOnePatient,
  deleteVideos,
  getActivePatients,
  getInactivePatients,
} from "../controllers/admin/adminEndpoints.js";

import {
  loginPatient,
  getSession,
  deleteSession,
  postWatchedVideo,
  postScan,
  deletePatient,
  getVideoUrl,
  setPatientInactive,
} from "../controllers/patient/patientEndpoints.js";

import {
  loginAdmin,
  getAdminSession,
  deleteAdminSession,
} from "../controllers/admin/adminLogin.js";
import { 
  fileToServer, 
  verifyUser, 
  uploadAndCallback, 
  UpdateDatabase
} from "../controllers/admin/videoHandler.js"; 


const router = express.Router();

//router.get("/test", getTest);
router.get("/newpatient", postPatient);
router.get("/getpatients", getPatients);
router.post("/loginpatient", loginPatient);
router.get("/getsession", getSession);
router.delete("/logoutpatient", deleteSession);
router.get("/getonepatient/:name", getOnePatient);
router.post("/adminlogin", loginAdmin);
router.get("/getadminsession", getAdminSession);
router.delete("/logoutadmin", deleteAdminSession);
router.get("/getvideourl", getVideoUrl);
router.get("/getvideos", getVideos);
router.post("/postscan/:name/:videoId", postScan);
router.post("/postwatchedvideo/:name/:videoId/:active", postWatchedVideo);
router.delete("/deletevideo", deleteVideos);
router.delete("/deletepatient", deletePatient);
router.put("/setpatientinactive/:name", setPatientInactive);
router.get("/getactivepatients", getActivePatients);
router.get("/getinactivepatients", getInactivePatients);


router.post('/upload',  fileToServer(), async (req, res) => { verifyUser(req) });
router.get('/oauth2callback?', async (req, res) => { uploadAndCallback(req, res) });
router.post('/updateDatabase', async (req, res) => { UpdateDatabase(req, res) });


export default router;
