import express from "express";
import { getPostByIdController, patchPostController } from "../controller/postController";

const postRouter = express.Router();

postRouter.get("/:id", getPostByIdController);

postRouter.patch("/:id", patchPostController);

export default postRouter;

