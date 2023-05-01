import {createPool} from 'mysql2/promise'
export const pool=createPool({
    host: 'localhost',
    user: 'root',
    password:'72230547',
    port: 3306,
    database:'AspiranteEPSG'
})