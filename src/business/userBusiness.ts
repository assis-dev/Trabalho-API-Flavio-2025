import { findUsersByAgeRange, findUserById } from "../data/userData";

export const getUserById = (id: number) => {
  return findUserById(id);
};

export const getUsersByAgeRange = (min: number, max: number) => {
  return findUsersByAgeRange(min, max);
};