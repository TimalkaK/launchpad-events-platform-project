import { Request, Response } from "express";
import * as userService from "../services/users";

export const getUsers = async (req: Request, res: Response) => {
  const users = await userService.getUsers();
  res.json(users).status(200);
};

export const getUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = await userService.getUser(Number(userId));

  if (user) {
    res.json(user).status(200);
  } else {
    res.status(404).json("Not found");
  }
};

export const createUser = async (req: Request, res: Response) => {
  const userToBeCreated = req.body;
  try {
    const user = await userService.createUser(userToBeCreated);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// User Story 4 - Update User By Id
export const updateUser = async (req: Request, res: Response) => {
  const userUpdateData = req.body;
  const userId = Number.parseInt(req.params.userId);

  const user = await userService.updateUser(userId, userUpdateData);
  res.status(204).json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const userDeleteData = req.body;
  const userId = Number.parseInt(req.params.userId);

  const user = await userService.deleteUser(userId, userDeleteData);
  res.status(204).json(user);
};
