import { posts, nextPostId, Post, users } from "./bd";

export const createPost = (title: string, content: string, authorId: number): Post => {
  const newPost: Post = {
    id: nextPostId, 
    title,
    content,
    authorId,
    createdAt: new Date(),
    published: false,
  };

  posts.push(newPost);

  (global as any).nextPostId = nextPostId + 1;

  return newPost;
};

export const checkAuthorExists = (authorId: number): boolean => {
  return users.some((user) => user.id === authorId);
};

export const findPostById = (id: number): Post | undefined => {
  return posts.find((post) => post.id === id);
};

export const getAllPosts = (): Post[] => posts;


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
