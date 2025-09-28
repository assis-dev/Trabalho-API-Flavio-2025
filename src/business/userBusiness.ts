import { findUserById } from "../data/userData";

export const getUserById = (id: number) => {
  return findUserById(id);
};