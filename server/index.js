import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/routes.js";
import videoRouters from "./routes/videoRoutes.js"; 
import mongoose from "mongoose";
/* 
    FÖR ATT STARTA SERVER GÖR FÖLJANDE: 
    1. ligg i mappen /wee-do/server/ och skriv "npm install"
        för att installera samtliga dependencies
    2. skriv "npm start" i terminalen (se till att ligga i servermappen)
    3. se i terminalen så det står: "Server upp and running, and connected to database on port: 8000"
*/

//configuration of env file
dotenv.config();

const PORT = process.env.PORT;

const app = express();

//middleware
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(routes);
app.use(videoRouters); 
app.use(express.static("public")); //osäker om nödvändig

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