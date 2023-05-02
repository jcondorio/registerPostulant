import express from 'express'
import usuarioRoutes from './routes/usuario.routes.js'
import indexRoutes from './routes/index.routes.js'
import auth from './routes/auth.routes.js'
import {PORT} from './config.js'
import cors from 'cors'
import jwt from 'jsonwebtoken'

const app=express()


app.use(express.json())
app.use(cors())

const verifyToken=(req,res,next)=>{
    const authHeader=req.headers['authorizztion'];
    const token=authHeader && authHeader.split(' ')[1];
    console.log(authHeader)
    if(token==null)
        return res.status(401).send('token requerido');
        jwt.verify(token,process.env.TOKEN_KEY,(err,user)=>{
            if(err) return res.status(403).send('token invalido');
            console.log(user);
            req.user=user;
            next();
        });   
}
app.use(indexRoutes)
app.use(usuarioRoutes)
app.use(auth)
app.listen(PORT)
