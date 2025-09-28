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


export const getPostByIdController = (req: Request, res: Response) => {
  const postId = parseInt(req.params.id as string);

  if (isNaN(postId)) {
    return res.status(400).json({
      success: false,
      message: "ID do post inválido. Forneça um número."
    });
  }

  const post = postBusiness.getPostById(postId);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: "Post não encontrado."
    });
  }

  res.json({
    success: true,
    data: post
  });
};
