import { createPost, checkAuthorExists, findPostById, updatePost } from "../data/postData";
import { Post } from "../data/bd";
import { posts, users } from "../data/bd";

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

export const patchPost = (id: number, updates: Partial<Post>): Post => {
  const updatedPost = updatePost(id, updates);

  if (!updatedPost) {
    throw new Error("Post não encontrado");
  }

  return updatedPost;
};

export const deletePost = (postId: number, userId: number): boolean | string => {
  const postIndex = posts.findIndex((p) => p.id === postId);
  if (postIndex === -1) return "Post não encontrado.";

  const user = users.find((u) => u.id === userId);
  if (!user) return "Usuário não encontrado.";

  const post = posts[postIndex];
  if (user.role !== "admin" && post.authorId !== user.id) {
    return "Apenas o autor ou um admin pode deletar este post.";
  }

  posts.splice(postIndex, 1);
  return true;
};