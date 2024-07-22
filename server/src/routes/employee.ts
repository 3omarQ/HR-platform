import express from "express";
import employee from "../controllers/employee";
import { auth } from "../controllers/middleware";

const router = express.Router();

router.post("/",auth(['ADMIN']) ,employee.createEmployee);

router.put("/information",auth(['EMPLOYEE']),employee.updateInformation)
router.put("/document",auth(['EMPLOYEE']),employee.updateDocument)

router.get('/:id',auth(['ADMIN']),employee.getEmployee )
router.delete('/:id',auth(['ADMIN']),employee.deleteEmployee) 


export default router;
