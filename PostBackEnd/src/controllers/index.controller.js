import {pool} from '../db.js'
export const ping = async(req,res)=>{
    try {
        const[result]=await pool.query('select "pong" As result')
    res.json(result[0])
    } catch (error) {
        return res.status(500).json({
            message: 'vamos mal oe que?'
        })
    }
    
}