const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {});

app.listen(PORT, () => {
  console.log(`app is running on the port ${PORT}`);
});
