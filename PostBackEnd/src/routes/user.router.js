import { Router } from "express";
import {pool} from '../database.js'
import {userController,usersController} from '../controllers/user.controller.js'
import {verifyToken} from '../middlewares/authVerify.js'
const router=Router();

router.get('/user',userController)
router.get('/users',usersController)

export default router;