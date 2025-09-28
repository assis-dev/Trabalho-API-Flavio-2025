import { users } from "./bd";

export const findUserById = (id: number) => {
  return users.find((u) => u.id === id);
};