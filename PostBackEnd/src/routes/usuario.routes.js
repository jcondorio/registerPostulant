import {Router} from 'express'
import {getUsuario} from '../controllers/usuario.controller.js'
const router=Router()
router.get('/usuario/usuario',getUsuario)
export default router