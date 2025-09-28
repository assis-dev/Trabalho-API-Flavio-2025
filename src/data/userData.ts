import { users } from "./bd";

export const findUserById = (id: number) => {
  return users.find((u) => u.id === id);
};

export const findUsersByAgeRange = (min: number, max: number) => {
  return users.filter((user) => user.age >= min && user.age <= max);
};
