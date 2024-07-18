import express from "express";
import employee from "../controllers/employee";
import { auth } from "../controllers/middleware";

const router = express.Router();

router.post("/",auth(['ADMIN']) ,employee.createEmployee);
router.put("/information",auth(['EMPLOYEE']),employee.updateInformation)
router.get('/:id',auth(['ADMIN']),employee.getEmployee )



export default router;

//ToDo : check  when we create new employee we create a emp info schema in the db 
//ToDo : check  update information path 
