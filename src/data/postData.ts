import { users } from "./bd";
import { posts, Post } from "./bd";

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: Date;
  published: boolean;
}

const posts: Post[] = [];
let nextPostId = 1;

export const createPost = (title: string, content: string, authorId: number): Post => {
  const newPost: Post = {
    id: nextPostId++,
    title,
    content,
    authorId,
    createdAt: new Date(),
    published: false,
  };

  posts.push(newPost);
  return newPost;
};

export const checkAuthorExists = (authorId: number): boolean => {
  return users.some((user) => user.id === authorId);
};

export const getAllPosts = (): Post[] => posts;


export const findPostById = (id: number): Post | undefined => {
  return posts.find(p => p.id === id);
};

export const updatePost = (id: number, updates: Partial<Post>): Post | null => {
  const postIndex = posts.findIndex((p) => p.id === id);

  if (postIndex === -1) {
    return null;
  }

  if ("id" in updates) {
    throw new Error("Não é permitido alterar o ID");
  }

  posts[postIndex] = { ...posts[postIndex], ...updates };
  return posts[postIndex];
};
