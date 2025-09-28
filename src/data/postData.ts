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
