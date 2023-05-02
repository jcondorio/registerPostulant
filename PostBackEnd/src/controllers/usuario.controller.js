import {pool} from '../db.js'
import jwt from 'jsonwebtoken'
export const getUsuario=async (req,res)=>{
    const [rows]=await pool.query('Select * from usuario')
    res.json(rows)
}
