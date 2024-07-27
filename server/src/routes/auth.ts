import express from "express";
import auth from "../controllers/auth";
import { auth as checkToken } from "../controllers/middleware";

const router = express.Router();

router.post("/", auth.signIn);
router.post("/forget-password", auth.forgetPassword);
router.post("/reset-password", checkToken([],"forget-password"), auth.resetPassword);

export default router;
