import express from "express";
import { getPostByIdController, patchPostController, deletePostController, createPostController } from "../controller/postController";

const postRouter = express.Router();

postRouter.post("/", createPostController);

postRouter.get("/:id", getPostByIdController);

postRouter.patch("/:id", patchPostController);

postRouter.delete("/:id", deletePostController);

export { postRouter };
