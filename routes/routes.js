import express from "express";

import {
  postPatient,
  getPatients,
  getVideos,
  getOnePatient,
  deleteVideos,
  getActivePatients,
  getInactivePatients,
  getVideoTitleById,
} from "../controllers/admin/adminEndpoints.js";

import {
  loginPatient,
  getSession,
  deleteSession,
  postWatchedVideo,
  postScan,
  postSelectedVideos,
  deletePatient,
  getMyVideos,
  getVideoUrl,
  setPatientInactive,
  setPatientActive,
  deleteSelectedVideo,
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
  UpdateDatabase,
} from "../controllers/admin/videoHandler.js";

const router = express.Router();

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
router.get("/getmyvideostodo", getMyVideos); 
router.post("/postscan/:name/:videoId", postScan);
router.post(
  "/postwatchedvideo/:name/:videoId/:active/:title",
  postWatchedVideo
);
router.post(
  "/postselectedexercises/:name/:selectedexercises",
  postSelectedVideos
);
router.delete("/deleteSelectedVideo", deleteSelectedVideo);
router.delete("/deletevideo", deleteVideos);
router.get("/getVideoTitleAndDescription", getVideoTitleById);
router.delete("/deletepatient", deletePatient);
router.put("/setpatientinactive/:name", setPatientInactive);
router.put("/setpatientactive/:name", setPatientActive);
router.get("/getactivepatients", getActivePatients);
router.get("/getinactivepatients", getInactivePatients);

router.post("/upload", fileToServer(), async (req, res) => {
  verifyUser(req);
});
router.get("/oauth2callback?", async (req, res) => {
  uploadAndCallback(req, res);
});
router.post("/updateDatabase", async (req, res) => {
  UpdateDatabase(res);
});

router.post("/upload", fileToServer(), async (req, res) => {
  verifyUser(req);
});
router.get("/oauth2callback?", async (req, res) => {
  uploadAndCallback(req, res);
});
router.post("/updateDatabase", async (req, res) => {
  UpdateDatabase(res);
});

export default router;
