const express =require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app=express();
const port = process.env.PORT|| 3001;
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Backend con node js');
});
app.listen(port,()=>{
    console.log("Port =>",port);
});