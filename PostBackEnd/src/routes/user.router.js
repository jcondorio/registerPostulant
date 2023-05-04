import { Router } from "express";
import {pool} from '../database.js'
import {userController} from '../controllers/user.controller.js'
import {verifyToken} from '../middlewares/authVerify.js'
const router=Router();

router.get('/user',verifyToken,userController)


export default router;