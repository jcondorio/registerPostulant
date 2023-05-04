
import {pool} from '../database.js'
import jwt from 'jsonwebtoken'
import express from 'express'
export const userController= async(req,res)=>{
    try {
        //console.log(req.body)
        jwt.verify(req.token,'secretkey',(error,authData)=>{
            if(error){
                res.sendStatus(403);
            }
            else{
                res.json({
                    mesaje:"pasamos todos los filtros",
                    authData:authData
                })
            }
        })
        //const [rows]=await pool.query('select * from Usuario')
        //res.send(rows);
    } catch (error) {
        return res.status(500).json({
            messaje:'joder salio mal'
        })
    }
}