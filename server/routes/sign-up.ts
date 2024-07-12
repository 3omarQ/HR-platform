import express, { Request, Response } from 'express';
import AdminModel from '../models/admin';
import EmployeeModel from '../models/employee';

const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


router.post('/', async (req: Request, res: Response) => {
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            password,
            role
        } = req.body
        if (role === "admin") {
            const admin = await AdminModel.findOne({ email });
            if (admin) {
                return res.status(400).json({ message: 'admin already exist' })
            }
            const cryptedPassword = await bcrypt.hash(password, 10)
            const newAdmin = new AdminModel({
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                email,
                phone,
                password: cryptedPassword,
                role: role,
            })
            await newAdmin.save()
            const token = jwt.sign({ _id: newAdmin._id, role: newAdmin.role }, process.env.SECREAT_TOCKEN, { expiresIn: 60 * 60 }) //expired after 1h
            res.setHeader("token", token)
            res.status(200).json({ message: 'admin logged in successfully' })
        } else if (role === "employee") {
            const employee = await EmployeeModel.findOne({ email });
            if (employee) {
                return res.status(400).json({ message: 'employee already exist' })
            }
            const cryptedPassword = await bcrypt.hash(password, 10)
            const newEmpleyee = new EmployeeModel({
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                email,
                phone,
                password: cryptedPassword,
                role: role,
            })
            await newEmpleyee.save()
            const token = jwt.sign({ _id: newEmpleyee._id, role: newEmpleyee.role }, process.env.SECREAT_TOCKEN , { expiresIn: 60 * 60 }) //expired after 1h
            res.setHeader("token", token)
            res.status(200).json({ message: 'employee logged in successfully' })
        }

    } catch (error: unknown) {
        res.status(500).json({message : " error came from server please try again "})
        console.log('error from sign up  :' , error)
    }
})


module.exports = router;