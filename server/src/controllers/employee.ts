import { Request, Response } from "express";
import emp_svc from "../services/employee";
import { asyncMiddelware } from "./middleware";

const createEmployee = asyncMiddelware(async (req: Request, res: Response) => {
    const message = await emp_svc.createEmployee(req.body);
    res.status(201).json(message);
});

const getEmployee = asyncMiddelware(async (req: Request, res: Response) => {
    const user = await emp_svc.getEmployee(req.params.id)
    res.status(200).json(user)
})

const deleteEmployee = asyncMiddelware(async (req: Request, res: Response) => {
    const message = await emp_svc.deleteEmployee(req.params.id)
    res.status(200).json({message})
})



const updateInformation = asyncMiddelware(async (req: Request, res: Response) => {
    const message = await emp_svc.updateInformation(res.locals.user.id, req.body);
    res.status(200).json({message})
})


const addDocument = asyncMiddelware(async (req: Request, res: Response) => {
    const message = await emp_svc.addDocument(res.locals.user.id, req.body);
    res.status(200).json({message})
})

const updateDocument = asyncMiddelware(async (req: Request, res: Response) => {
    const message = await emp_svc.updateDocument(res.locals.user.id, req.body);
    res.status(200).json({message})
})


const getEmployeeDocuments = asyncMiddelware(async (req: Request, res: Response) => {
    const emmDocuments = await emp_svc.getEmployeeDocuments(req.params.id);
    res.status(200).json(emmDocuments)
})


const getEmployeeInformations = asyncMiddelware(async (req: Request, res: Response) => {
    const empInformations = await emp_svc.getEmployeeInformations(req.params.id);
    res.status(200).json(empInformations)
})

export default { createEmployee, getEmployee, updateInformation, addDocument, getEmployeeDocuments, updateDocument, getEmployeeInformations, deleteEmployee };
