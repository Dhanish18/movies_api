// const express = require("express");
import express from "express";
import {
  movieDelete,
  movieCreate,
  movieIndex,
  movieUpdate,
} from "../controllers/movies_controller.js";
const router = express.Router();

//R - for reading
router.get("/", movieIndex);

//C - for creating
router.post("/", movieCreate);

//U - for update
router.patch("/:id", movieUpdate);

//D - for delete
router.delete("/:id", movieDelete);

export default router;
