require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Question = require("./models/Question");

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to MongoDB"))
  .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());

app.get("/questions", async (req, res) => {
  const questions = await Question.aggregate([{ $sample: { size: 25 } }]);

  return res.status(200).json(questions);
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
