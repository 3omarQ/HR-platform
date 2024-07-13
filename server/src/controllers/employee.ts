import { Request, Response } from "express";

import asyncHandler from "express-async-handler";

import emp_svc from "../services/employee";

const createEmployee = asyncHandler(async (req: Request, res: Response) => {
  try {
    const user = await emp_svc.createEmployee(req.body);

    // Todo: When account is created we should send a mail to employee with his credentials.

    res.status(201).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default { createEmployee };
