require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/mongodb");
const { clerkWebhooks } = require("./controllers/webhooks");
// const mongoose = require("mongoose");

// Initialize express
const app = express();

// connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routers

app.get("/", (req, res) => res.send("Api Working"));
app.post("/clerk", clerkWebhooks);

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// mongoose.connection.once("open", () => {
//   console.log("Connected to MongoDB");
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// });

// mongoose.connection.on("error", (err) => console.log(err));
