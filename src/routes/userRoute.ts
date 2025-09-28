import express from "express";
import { getUserByIdController } from "../controller/userController";

export const userRouter = express.Router();

userRouter.get("/:id", getUserByIdController);