// import mongoose from "mongoose";
const mongoose = require("mongoose");

// Connect to the MongoDB database

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));

  await mongoose.connect(`${process.env.MONGODB_URI}/LearnMernStack`);
};

// export default connectDB;

// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//   } catch (err) {
//     console.log(err);
//   }
// };

module.exports = connectDB;
