
import {pool} from '../database.js'
export const userController= async(req,res)=>{
    try {
        const [rows]=await pool.query('select * from Usuario')
        res.send(rows);
    } catch (error) {
        return res.status(500).json({
            messaje:'joder salio mal'
        })
    }
}