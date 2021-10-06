const port = 8000;

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

app.listen(port, () => console.log("listening att " + port));
app.use(express.static("public"));
