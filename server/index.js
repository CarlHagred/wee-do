import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/routes.js";

//configuration of env file
dotenv.config();

const PORT = process.env.PORT;

const app = express();

//middleware
app.use(express.json());

app.use(routes);

app.use(express.static("public")); //osäker om nödvändig

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(morgan("dev"));

app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}`));
