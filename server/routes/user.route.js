//Core Module
import express from "express";
const userRouter = express.Router();

//Local Module
import { signUp, login } from "../controller/userController.js";

userRouter.post("/signup", signUp);
userRouter.post("/login", login);

export default userRouter;
