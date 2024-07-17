import express from "express";
import employee from "../controllers/employee";
import { auth } from "../controllers/middleware";

const router = express.Router();

router.post("/",auth(['ADMIN']) ,employee.createEmployee);
router.get('/:id',auth(['ADMIN']),employee.getEmployee )
export default router;
