import express from 'express'
import jwt from 'jsonwebtoken'
export const verifyToken=async(req,res,next)=>{
    try {
        const bearerheader=req.headers['authorization'];
        
        if(typeof bearerheader!=='undefined'){
            const bearerToken=bearerheader.split(" ")[1];
            
            req.token=bearerToken;
            next();
            jwt.verify(req.token,'secretkey',(error,authData)=>{
                if(error){
                    res.sendStatus(403);
                }
                /*else{
                    res.json({
                        
                        mesaje:"pasamos todos los filtros",
                        authData:authData
                    })
                }*/
            })
            //console.log("en verify: ",bearerToken)
            //console.log(authData);
        }
        else{
            res.sendStatus("403");
        }
    } catch (error) {
        return res.send(error)
    }
}
