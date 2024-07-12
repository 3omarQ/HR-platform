import express, { Request, Response } from 'express';
import AdminModel from '../models/Admin';
import EmployeeModel from '../models/Employee';

const router = express.Router();
const bcrypt = require("bcrypt");
const jwt    = require("jsonwebtoken");

router.post("/",async(req:Request,res :Response)=>{
    try{
        const {email,password} = req.body 
        const admin = await AdminModel.findOne({email})
        const employee = await EmployeeModel.findOne({email})
        if(!admin && !employee){
            return res.status(400).json({message:'Email or Password is Wrong'})
        }else if(admin &&  !employee){
            const validPassword = await bcrypt.compare(password,admin.password)
            !validPassword && res.status(400).json({message:'Email or Password is Wrong'})
            const token = jwt.sign({_id:admin._id ,role:admin.role},"secret",{ expiresIn: 60 * 60 }) //expired after 1h
            res.setHeader("token",token)
            return res.status(200).json({message:"Welcome back"})
        }else if (!admin &&  employee){
            const validPassword = await bcrypt.compare(password,employee.password)
            !validPassword && res.status(400).json({message:'Email or Password is Wrong'})
            const token = jwt.sign({_id:employee._id ,role:employee.role},"secret",{ expiresIn: 60 * 60 }) //expired after 1h
            res.setHeader("token",token)
            return res.status(200).json({message:"Welcome back"})
        }
    }catch(error:unknown){
        console.log('error in signin ',error)
    }
})