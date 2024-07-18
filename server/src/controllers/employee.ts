import { Request, Response } from "express";
import emp_svc from "../services/employee";
import { asyncMiddelware } from "./middleware";

const createEmployee = asyncMiddelware(async (req: Request, res: Response) => {
    const user = await emp_svc.createEmployee(req.body);
    res.status(201).json(user);
});

const getEmployee = asyncMiddelware(async(req : Request ,res:Response)=> {
    const user = await emp_svc.getEmployee(req.params.id)
    res.status(200).json(user)
})


const updateInformation = asyncMiddelware(async (req:Request , res:Response )=>{
      const newEmpInfo = await emp_svc.updateInformation(req.body);
      res.status(200).json(newEmpInfo)
})


export default { createEmployee ,getEmployee,updateInformation};
