
import {pool} from '../database.js'
import jwt from 'jsonwebtoken'
import express from 'express'
export const usersController= async(req,res)=>{
    try {
        console.log(req.body)
        const [rows]=await pool.query('select * from Usuario where Usuario=?',[req.body.usuario])
        res.send(rows);
    } catch (error) {
        return res.status(500)
    }
}

export const userController= async(req,res)=>{
    try {
        //console.log(req.body)
        const [rows]=await pool.query('select * from Usuario')
        res.send(rows);
    } catch (error) {
        return res.status(500)
    }
}