const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");

app.listen(port, () => console.log("listening att " + port));
app.use(express.static("public"));

app.get("/", async (request, response) => {

 
});