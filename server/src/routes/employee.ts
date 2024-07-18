import express from "express";
import employee from "../controllers/employee";
import { auth } from "../controllers/middleware";

const router = express.Router();

router.post("/",auth(['ADMIN']) ,employee.createEmployee);

export default router;
