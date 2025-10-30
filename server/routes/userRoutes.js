const express = require("express");
const {
  getUserData,
  userEnrollredCourses,
  purchaseCourse,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/data", getUserData);
userRouter.get("/enrolled-courses", userEnrollredCourses);
userRouter.post("/purchase", purchaseCourse);

module.exports = userRouter;
