import express from 'express'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.router.js'
import indexRoutes from './routes/index.router.js'
import carreraRoutes from './routes/carrera.routes.js'
import estudiantes from './routes/estudiantes.routes.js'
import {PORT} from './config.js'
import cookieParser from 'cookie-parser'
import { estudiantesController } from './controllers/estudiantes.controller.js'
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express()

app.set('view engine','ejs')
app.use(express.json());
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));
//rutas
app.use(indexRoutes)
app.use(userRouter)
app.use(authRouter)
app.use(carreraRoutes)
app.use(estudiantes)
//para poder trabajar con las cookies
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
// iniciar server
app.listen(PORT)
//midlewares
app.use((req,res,next)=>{
    res.status(404).json({
        messaje:'endpoint not found'
    })
})

