import express from "express";
import auth from "../controllers/auth";
const router = express.Router();

router.post("/", auth.signIn);
router.post("/forget-password", auth.forgetAccount);
router.post("/reset-password", auth.resetPassword);

export default router;
