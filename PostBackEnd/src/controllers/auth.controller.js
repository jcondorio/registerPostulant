import {pool} from '../db.js'
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import cors from 'cors'
import {promisify} from 'util'

export const loguin=async (req,res)=>{
    try {
        const usuario= req.body.usuario;
        const clave= req.body.clave;
        const usuarioDB= await pool.query('select Usuario,Password from Usuario where Usuario=?',[usuario]) 
        const comparar= await bcryptjs.compare(clave,usuarioDB[0][0].Password)
        //console.log(usuarioDB[0][0].Password)
        console.log("imprime comparar:",comparar)
        if(comparar==true){
            const datos={
                id:usuario,
                codigo:clave
            }
            const token=jwt.sign(
                    {userId:datos.id},
                    process.env.TOKEN_KEY,
                    {expiresIn: '2h'}
            );
            let nDatos={...datos,token};
            res.status(200).json(nDatos);
        }
        else{
            res.status(400).send('cedrenciales incorrectas');
        }
    } catch (error) {
        res.status(400).send('cedrenciales incorrectas');
    }
   
}
export const register=async (req,res)=>{
    try{
    const contencryp = await bcryptjs.hash(req.body.Password,8);
    console.log(contencryp)
    const values=[
        req.body.TipoUsu,
        req.body.NomUsu,
        req.body.Apeusu1,
        req.body.Apeusu,
        req.body.DniUsu,
        req.body.EmailUsu,
        req.body.DirUsu,
        req.body.Usuario,
        contencryp
    ]
    console.log(values)
    const [rows]=await pool.query('insert into Usuario(`IdTipoUsu`,`NomUsu`,`ApeUsu1`,`ApeUsu`,`DniUsu`,`EmailUsu`,`DirUsu`,`Usuario`,`Password`) values(?)',[values])
    console.log(rows)
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

