import { Router } from "express";
import {pool} from '../database.js'
import {userController} from '../controllers/user.controller.js'
const router=Router();

router.get('/user',userController)


export default router;