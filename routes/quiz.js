const express = require("express");
const Quiz = require("../Models/quiz");
const server = express.Router();

server.post("/", async (req, res) => {
  const { category, difficulty, limit } = req.body;
  try {
    let question = await Quiz.find({ category, difficulty }).limit(+limit);
    return res.status(200).json({ response_code: 0, results: question });
  } catch (e) {
    return res.status(404).json({ response_code: 1, msg: e.msg });
  }
});

module.exports = server;
