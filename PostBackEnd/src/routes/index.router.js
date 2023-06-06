import { Router } from "express";
import {pool} from '../database.js'
const router=Router();

router.get('/usuarios',(req, res)=>{
    res.render('users')
})
router.get('/registro',(req, res)=>{
    res.render('registroUser')
})
router.get('/carreras',(req, res)=>{
    res.render('carreraseps')
})
router.get('/carpetas',(req, res)=>{
    res.render('carpetasespg')
})
router.get('/estudiantes',(req, res)=>{
    res.render('estudiantesespg')
})

export default router;