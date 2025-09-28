import express from "express";
import { getPostByIdController } from "../controller/postController";

export const postRouter = express.Router();

postRouter.post("/", createPostController);

const postRouter = express.Router();

postRouter.get("/:id", getPostByIdController);

export default postRouter;
