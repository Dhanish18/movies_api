import express from "express";
const app = express();
const PORT = 8000;
import router from "./routes/movies_routes.js";
import connectDB from "./lib/db.js";

//data understanding middleware
app.use(express.json());
app.use(express.urlencoded());

// connect DB
connectDB();

//CRUD functionality for movies

app.use("/movies", router);

app.listen(PORT, () => {
  console.log(`app is running on the port ${PORT}`);
});
