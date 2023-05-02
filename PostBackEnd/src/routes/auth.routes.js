import {Router} from 'express'
import {loguin,register} from '../controllers/auth.controller.js'
const router=Router()
router.post('/auth/usuario',loguin)
router.post('/auth/register',register)
export default router