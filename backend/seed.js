require("dotenv").config();

const Question = require("./models/Question");
const questions = require("./questions");

const mongoose = require("mongoose");

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to mongoDB");
    await Question.insertMany(questions);
    console.log("Questions seeded successfully");
  } catch (error) {
    console.log(error);
  }
  mongoose.connection.close();
};

seedDatabase();
