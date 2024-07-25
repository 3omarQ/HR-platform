import express from "express";
import employee from "../controllers/employee";
import { auth } from "../controllers/middleware";

const router = express.Router();

//document model dont need a post methode cause when we create an empmoyee this model created automaticly
//i create a put methode for document if we want to updated cv for exmple or any document already exist  

router.post("/", auth(['ADMIN']), employee.createEmployee);
router.get("/", auth(['ADMIN']), employee.getAllEmployees);
router.post("/document", auth(['EMPLOYEE']), employee.addDocument)
router.put("/document", auth(['EMPLOYEE']), employee.updateDocument)
router.put("/information", auth(['EMPLOYEE']), employee.updateInformation)
router.get('/:id', auth(['ADMIN']), employee.getEmployee)
router.get('/:id/document', auth(['ADMIN']), employee.getEmployeeDocuments)
router.get('/:id/information', auth(['ADMIN']), employee.getEmployeeInformations)
router.delete('/:id', auth(['ADMIN']), employee.deleteEmployee)


export default router;
