import express from "express";
import * as usersController from "../controllers/users_controller";

export const router = express.Router();
router.get("/users", usersController.getUsers);
router.get("/users/:userId", usersController.getUser);
router.post("/users", usersController.createUser);

// User Story 4 - Update user By Id Solution
router.put("/books/:bookId", usersController.updateUser);

router.put("/books/:bookId", usersController.deleteUser);
