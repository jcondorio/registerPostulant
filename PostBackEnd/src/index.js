import express from 'express'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.router.js'
import indexRoutes from './routes/index.router.js'
import {PORT} from './config.js'



const app=express()
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(indexRoutes)
app.use(userRouter)
app.use(authRouter)

// iniciar server
app.listen(PORT)
//midlewares
app.use((req,res,next)=>{
    res.status(404).json({
        messaje:'endpoint not found'
    })
})

