import express from "express";
import { getPostByIdController, patchPostController, deletePostController } from "../controller/postController";

const postRouter = express.Router();

postRouter.get("/:id", getPostByIdController);

postRouter.patch("/:id", patchPostController);

postRouter.delete("/:id", deletePostController);

export default postRouter;


