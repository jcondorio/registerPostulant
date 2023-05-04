import { Router } from "express";
import {pool} from '../database.js'
import {authController,loginController} from '../controllers/auth.controller.js'
const router=Router();

router.post('/register',authController)
router.post('/login',loginController)
export default router;