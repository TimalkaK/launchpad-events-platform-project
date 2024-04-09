import { User } from "../models/user";

export const getUsers = async () => {
  return User.findAll();
};

export const getUser = async (userId: number) => {
  return User.findOne({
    where: { userId },
  });
};

export const createUser = async (user: User) => {
  return User.create<User>(user);
};

// User Story 4 - Update User By Id Solution
export const updateUser = async (userId: number, user: User) => {
  return User.update(user, {
    where: {
      userId,
    },
  });
};

export const deleteUser = async (userId: number, user: User) => {
  return User.destroy({
    where: {
      userId,
    },
  });
};
