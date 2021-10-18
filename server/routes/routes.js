import express from 'express';

import { getTest } from '../controllers/routerLogic.js';
import {
  postPatient,
  getPatients,
} from '../controllers/admin/adminEndpoints.js';
import { getVideoUrl } from '../controllers/client/clientEndpoints.js';

const router = express.Router();

router.get('/test', getTest);
router.get('/newpatient', postPatient);
router.get('/getpatients', getPatients);
router.get('/getvideourl', getVideoUrl);

export default router;