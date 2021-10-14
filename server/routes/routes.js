import express from 'express';

import { getTest } from '../controllers/routerLogic.js';
import {
  postPatient,
  getPatients,
} from '../controllers/admin/adminEndpoints.js';

import { getVideo } from '../controllers/client/clientEndpoints';

const router = express.Router();

router.get('/test', getTest);
router.get('/newpatient', postPatient);
router.get('/getpatients', getPatients);
router.get('/getvideo', getVideo);

export default router;
