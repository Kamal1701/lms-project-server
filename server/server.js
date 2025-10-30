require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/mongodb");
const { clerkWebhooks, stripeWebhooks } = require("./controllers/webhooks");
// const { educatorRouter } = require("./routes/educatorRoutes");
const { clerkMiddleware } = require("@clerk/express");
const { connectCloudinary } = require("./configs/cloudinary");
// const mongoose = require("mongoose");

// Initialize express
const app = express();

// connect to database
connectDB();
connectCloudinary();

// Middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Routers

app.get("/", (req, res) => res.send("Api Working"));
app.post("/clerk", express.json(), clerkWebhooks);
// app.use("/api/educator", educatorRouter);
app.use("/api/educator", require("./routes/educatorRoutes"));
app.use("/api/course", require("./routes/courseRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

// Port
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
