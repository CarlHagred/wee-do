import express from "express";
import passport from "passport";

import { getTest } from "../controllers/routerLogic.js";
import {
  postPatient,
  getPatients,
  getVideos,
  getOnePatient,
} from "../controllers/admin/adminEndpoints.js";
import { getVideoUrl } from "../controllers/client/clientEndpoints.js";

import {
  loginPatient,
  getSession,
  deleteSession,
  postWatchedVideo,
  postScan,
  postSelectedVideos,
} from "../controllers/patient/patientEndpoints.js";

import {
  loginAdmin,
  getAdminSession,
  deleteAdminSession,
} from "../controllers/admin/adminLogin.js";
import Videos from "../models/videos.js";

const router = express.Router();

router.get("/test", getTest);
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
router.post("/postwatchedvideo/:name/:videoId", postWatchedVideo);
router.post(
  "/postselectedexercises/:name/:selectedexercises",
  postSelectedVideos
);

export default router;
