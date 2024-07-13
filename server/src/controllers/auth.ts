import { Request, Response } from "express";

import asyncHandler from "express-async-handler";

import auth_svc from "../services/auth";

const signIn = asyncHandler(async (req: Request, res: Response) => {
  try {
    const access_token = await auth_svc.signIn(
      req.body?.email,
      req.body?.password
    );
    res.status(201).json({ access_token });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

const forgetAccount = asyncHandler(async (req: Request, res: Response) => {
  try {
    await auth_svc.forgetAccount(req.body.email);
    res.status(201).json({ message: "Request successfully executed" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

const resetPassword = asyncHandler(async (req: Request, res: Response) => {
  try {
    await auth_svc.resetPassword(req.body.email, req.body.password);
    res.status(201).json({ message: "Password successfully changed" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default { signIn, forgetAccount, resetPassword };
