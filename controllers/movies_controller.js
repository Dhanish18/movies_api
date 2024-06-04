export const movieIndex = (req, res) => {
  return res.send("hellooo im working!");
};

export const movieCreate = (req, res) => {
  res.send("post request received");
};

export const movieUpdate = (req, res) => {
  res.send("update request received");
};

export const movieDelete = (req, res) => {
  res.send("delete request received");
};
