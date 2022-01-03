import { Router } from "express";
import * as usersController from "../controllers/users.controller";

const router = Router();

router.get("/", usersController.getUsers);
router.post("/", usersController.createUser);
router.get("/:userId", usersController.getUserById);
router.put("/:userId", usersController.editUserById);
router.delete("/:userId", usersController.deleteUserById);

export default router;