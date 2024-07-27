import { Request, Response } from "express";
import auth_svc from "../services/auth";
import { asyncMiddelware } from "./middleware";

const signIn = asyncMiddelware(async (req: Request, res: Response) => {
    const access_token = await auth_svc.signIn(
      req.body?.email,
      req.body?.password
    );
    res.status(201).json({ access_token });
});

const forgetPassword = asyncMiddelware(async (req: Request, res: Response) => {
    await auth_svc.forgetPassword(req.body.email);
    res.status(201).json({ message: "Request successfully executed" });
});

const resetPassword = asyncMiddelware(async (req: Request, res: Response) => {
    await auth_svc.resetPassword(res.locals.user.id, req.body.password);
    res.status(201).json({ message: "Password successfully changed" });
});

export default { signIn, forgetPassword, resetPassword };
