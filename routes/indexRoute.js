import express from 'express'
import { home,about } from '../contollers/indexController.js'

const router = express.Router();

router.get('/',home)
router.get('/about',about)

export default router;