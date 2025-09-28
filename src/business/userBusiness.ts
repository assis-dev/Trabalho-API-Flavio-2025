import { findUsersByAgeRange, findUserById } from "../data/userData";
import { users, posts } from "../data/bd";

export const getUserById = (id: number) => {
  return findUserById(id);
};

export const getUsersByAgeRange = (min: number, max: number) => {
  return findUsersByAgeRange(min, max);
};

export const cleanupInactiveUsers = (): { removed: number; removedUsers: typeof users } => {
  const inactiveUsers = users.filter((user) => {
    const hasPosts = posts.some((post) => post.authorId === user.id);
    return !hasPosts && user.role !== "admin";
  });

  inactiveUsers.forEach((inactive) => {
    const idx = users.findIndex((u) => u.id === inactive.id);
    if (idx !== -1) users.splice(idx, 1);
  });

  return { removed: inactiveUsers.length, removedUsers: inactiveUsers };
};
