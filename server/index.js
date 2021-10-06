import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/routes.js";
import mongoose from "mongoose";

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


//Database connection
const CONNECTION_URI = process.env.CONNECTION_DB_URI;
const databaseConnection = async () => {
  try {
    await mongoose.connect(CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(
        `Server upp and running, and connected to database on port: ${PORT}`
      );
    });
  } catch (error) {
    console.log(error.message);
  }
};
databaseConnection();
