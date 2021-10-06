import express from "express";

import { getTest } from "../controllers/routerLogic.js";

const router = express.Router();

router.get("/test", getTest);

export default router;
