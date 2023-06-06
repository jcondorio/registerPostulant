
import {pool} from '../database.js'

export const carrerasController= async(req,res)=>{
    try {
        //console.log(req.body)
        const [rows]=await pool.query('select g.NomGrado,a.anio,s.NomSem,c.NomCarrera from carrera as c inner join grado as g on g.IdGrado=c.IdGrado inner join anio as a on a.IdAnio=c.IdAnio inner join semestre as s on s.IdSem=c.IdSem');
        console.log(rows)
        res.send(rows);
    } catch (error) {
        return res.status(500)
    }
}