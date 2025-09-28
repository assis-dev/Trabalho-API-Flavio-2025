import express from "express";
import { getUserByIdController, getUsersByAgeRangeController } from "../controller/userController";

export const userRouter = express.Router();

userRouter.get("/age-range", getUsersByAgeRangeController);

userRouter.delete("/cleanup-inactive", cleanupInactiveUsersController);

userRouter.get("/:id", getUserByIdController);


