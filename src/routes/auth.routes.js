import { Router } from "express";
import * as authControllers from "../controllers/auth.controllers";

const router = Router();

router.post("/signup",authControllers.signUp)

router.post("/signin",authControllers.signIn)

export default router;