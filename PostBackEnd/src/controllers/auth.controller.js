
import {pool} from '../database.js'
import jwt from 'jsonwebtoken'
import express from 'express'
import bcrypt from 'bcrypt'
export const authController= async(req,res)=>{
    try {
        //console.log(req.body)
        const psw= await bcrypt.hash(req.body.clave,8);
        const data=await pool.query('insert into Usuario(IdTipoUsu,Usuario,Password) values(?,?,?)',[req.body.id,req.body.nombre,psw]);
        res.json({
            mesaje:data
        })
    } catch (error) {
        return res.send(error);
        /*return res.status(500).json({
            messaje:'joder salio mal'
        })*/
    }
}

export const loginController=async(req,res)=>{
    try {
        console.log(req.body.clave)
        const [data]=await pool.query('select * from Usuario where Usuario=?',[req.body.nombre]);
        console.log(data[0].Password)
        const compare=bcrypt.compareSync(req.body.clave,data[0].Password)
        console.log("compare: ",compare)
    
    const user= {
        id:data[0].IdTipoUsu,
        nombre:data[0].Usuario,
        clave:data[0].Password
    }
    console.log(user)
    jwt.sign({user},'secretkey',{expiresIn:'20m'},(err,token)=>{
        res.json({
            token
        })
    })
    const cookiesOptions = {
        expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
        httpOnly: true
   }
   res.cookie('jwt', token, cookiesOptions)
   res.render('login', {
        alert: true,
        alertTitle: "Conexión exitosa",
        alertMessage: "¡LOGIN CORRECTO!",
        alertIcon:'success',
        showConfirmButton: false,
        timer: 800,
        ruta: ''
   })
    } catch (error) {
        return res.send(error)
    }
    
}