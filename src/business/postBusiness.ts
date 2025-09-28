import { createPost, checkAuthorExists, } from "../data/postData";
import { findPostById } from "../data/postData";
import { Post } from "../data/bd";

export const createNewPost = (title: string, content: string, authorId: number): Post | string => {
  if (!title || title.length < 3) {
    return "O título deve ter no mínimo 3 caracteres.";
  }

  if (!content || content.length < 10) {
    return "O conteúdo deve ter no mínimo 10 caracteres.";
  }

  if (!checkAuthorExists(authorId)) {
    return "authorId inválido. Usuário não encontrado.";
  }

  return createPost(title, content, authorId);
};


export const getPostById = (id: number): Post | undefined => {
  return findPostById(id);
};
