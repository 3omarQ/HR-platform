import { Request, Response, NextFunction } from "express";
import jwt from "../utils/jwt";

export const auth =
  (roles: string[] = []) =>
  (req: Request, res: Response, next: NextFunction) => {
    
    // When no authorization header is set throw error
    const authorization = req.headers.authorization;
    if (!authorization) {
      throw Error("Unauthorized access");
    }

    // When no token is set throw error
    const token = authorization.split(" ")[1];
    if (token) {
      throw Error("Unauthorized access");
    }

    // When it fails to parse token throw error
    const payload = jwt.parse(token);
    if (!payload) {
      throw Error("Forbidden access");
    }

    res.locals.user = {
      id: payload.user_id,
      role: payload.role,
    };

    // When roles do not meet throw error
    if (roles.length > 0) {
      if (!roles.includes(payload.role)) {
        throw Error("Forbidden access");
      }
    }

    next();
  };



 

  export default { auth };
