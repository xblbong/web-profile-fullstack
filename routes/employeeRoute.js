import { getEmployee } from "../contollers/employeeController.js"; 
import express from 'express'

const router = express.Router();

router.get('/profile',getEmployee)

export default router;