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

export const posts: Post[] = [
  { id: 1, title: 'Primeiro Post', content: 'Conteúdo do primeiro post...', authorId: 1, createdAt: new Date(), published: true },
  { id: 2, title: 'Receita de brownie', content: 'Passo a passo para um bolo perfeito.', authorId: 5, createdAt: new Date(), published: true },
  { id: 3, title: 'Viagem ao Espaço', content: 'Minha experiência visitando a lua.', authorId: 4, createdAt: new Date(), published: false }
];

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: Date;
  published: boolean;
}

export let nextPostId = 1;