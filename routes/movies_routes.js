// const express = require("express");
import express from "express";
const router = express.Router();

//R - for reading
router.get("/", (req, res) => {
  return res.send("hellooo im working!");
});

//C - for creating
router.post("/", (req, res) => {
  res.send("post request received");
});

//U - for update
router.patch("/", (req, res) => {
  res.send("patch request received");
});

//D - for delete
router.delete("/", (req, res) => {
  res.send("delete request received");
});

export default router;
