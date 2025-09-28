import express from "express";
import { createPostController } from "../controller/postController";

export const postRouter = express.Router();

postRouter.post("/", createPostController);
