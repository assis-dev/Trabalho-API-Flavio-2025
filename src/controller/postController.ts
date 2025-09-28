import { Request, Response } from "express";
import * as postBusiness from "../business/postBusiness";

export const createPostController = (req: Request, res: Response) => {
  const { title, content, authorId } = req.body;

  const result = postBusiness.createNewPost(title, content, authorId);

  if (typeof result === "string") {
    return res.status(400).json({
      success: false,
      message: result,
    });
  }

  res.status(201).json({
    success: true,
    post: result,
  });
};
