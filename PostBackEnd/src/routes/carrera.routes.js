import { Router } from "express";
import {pool} from '../database.js'
import {carrerasController} from '../controllers/carrera.controller.js'
const router=Router();

router.get('/carrera',carrerasController)

export default router;