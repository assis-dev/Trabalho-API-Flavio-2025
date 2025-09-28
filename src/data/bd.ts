export interface User {
  id: number;
  name: string;
  email: string;
  senha: string;
  age: number;
  role: string;
  status: "active" | "inactive";
}

export const users: User[] = [
  {
    id: 1,
    name: "Flávio",
    email: "flavio@flavio.com",
    senha: "flavio",
    age: 34,
    role: "user",
    status: "active",
  },
  {
    id: 2,
    name: "Nikollas",
    email: "nikollas@nikollas.com",
    senha: "nikollas",
    age: 46,
    role: "user",
    status: "active",
  },
  {
    id: 3,
    name: "Nilton",
    email: "nilton@nilton.com",
    senha: "nilton",
    age: 24,
    role: "user",
    status: "active",
  },
];

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: Date;
  published: boolean;
}

export const posts: Post[] = [];
export let nextPostId = 1;