import Movie from "../models/movie.model.js";

export const movieIndex = (req, res) => {
  return res.send("hellooo im working!");
};

export const movieCreate = async (req, res) => {
  // id, title, desc

  //validate your data
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });

  //successful or error
  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const movieUpdate = (req, res) => {
  res.send("update request received");
};

export const movieDelete = (req, res) => {
  res.send("delete request received");
};
