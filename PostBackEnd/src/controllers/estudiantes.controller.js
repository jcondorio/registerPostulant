
import {pool} from '../database.js'
import jwt from 'jsonwebtoken'
import express from 'express'
export const estudiantesController= async(req,res)=>{
    try {
        console.log("estudiantes",req.body)
        //const [rows]=await pool.query('select * from Usuario where Usuario=?',[req.body.usuario]);
        const [rows]=await pool.query('select * from aspirante');
        console.log("aver",rows)
        res.send(rows);
    } catch (error) {
        return res.status(500)
    }
}