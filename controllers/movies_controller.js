export const movieIndex = (req, res) => {
  return res.send("hellooo im working!");
};

export const movieCreate = (req, res) => {
  console.log(req.body);
  return res.json(req.body);
};

export const movieUpdate = (req, res) => {
  res.send("update request received");
};

export const movieDelete = (req, res) => {
  res.send("delete request received");
};
