const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  return res.json({ msg: "hellooo" });
});

//CRUD functionality for movies

//R - for reading
app.get("/movies", () => {});

//C - for creating
app.post("/movies", () => {});

//U - for update
app.patch("/movies", () => {});

//D - for delete
app.delete("/movies", () => {});

app.listen(PORT, () => {
  console.log(`app is running on the port ${PORT}`);
});
