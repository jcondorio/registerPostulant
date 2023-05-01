import express from 'express'
import usuarioRoutes from './routes/usuario.routes.js'
import indexRoutes from './routes/index.routes.js'
import './config.js'
const app=express()
app.use(express.json())
app.use(indexRoutes)
app.use(usuarioRoutes)
app.listen(3001)
