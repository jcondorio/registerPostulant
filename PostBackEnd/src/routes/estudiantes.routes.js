import { Router } from "express";
import {pool} from '../database.js'
import {estudiantesController} from '../controllers/estudiantes.controller.js'
const router=Router();

router.get('/estudiantes1',estudiantesController)

export default router;