import { Request, Response, NextFunction } from "express";
import jwt from "../utils/jwt";

export const auth =
  (roles: string[] = [], tokenType: string) =>
    (req: Request, res: Response, next: NextFunction) => {

      // When no authorization header is set throw error
      const authorization = req.headers.authorization;
      if (!authorization) {
        return res.status(400).json({ error: "Unauthorized access" })
      }

      // When no token is set throw error
      const token = authorization.split(" ")[1];
      if (!token) {
        return res.status(400).json({ error: "Unauthorized access" })

      }

      // When it fails to parse token throw error
      const payload = jwt.validate(token);
      if (!payload) {
        return res.status(400).json({ error: "Forbidden access " })

      }

      const payloadObject = typeof payload === "string" ? JSON.parse(payload) : payload;

      // when token type not the same of the payload
      if (payloadObject.tokenType !== tokenType) {
        return res.status(400).json({ error: "Invalid token" })
      }

      res.locals.user = {
        id: payloadObject.user_id,
        role: payloadObject?.role,
        tokenType: payloadObject.tokenType,
      };

      // When roles do not meet throw error
      if (roles.length > 0) {
        if (!roles.includes(payloadObject.role)) {
          return res.status(400).json({ error: "Forbidden access 2" })

        }
      }

      next();
    };



export const asyncMiddelware = (handler: Function) => async (req: Request, res: Response) => {
  try {
    await handler(req, res)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}



export default { auth };
