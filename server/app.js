/* eslint-disable no-undef */

//core module
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// local module
import bookRoute from "./routes/book.route.js";
import userRouter from "./routes/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

// conecting mongodb
try {
  mongoose.connect(URI);
  console.log("connect to mongo");
} catch (error) {
  console.log("Error", error);
}

//conectig routes
app.get("/", (req, res) => {
  res.send("API WORKING")
})
app.use("/book", bookRoute);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
