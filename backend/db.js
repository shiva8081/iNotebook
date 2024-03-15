const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/new";

async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully");
  } catch (err) {
    console.error(err);
  }
}

module.exports = { connectToMongo };