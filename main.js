// const express = require("express");
import express from "express";

const app = express();
const PORT = 8000;
// const router = require("./routes/movies_routes.js");
import router from "./routes/movies_routes.js";

//CRUD functionality for movies

app.use("/movies", router);

app.listen(PORT, () => {
  console.log(`app is running on the port ${PORT}`);
});
