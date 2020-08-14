const mysql = require('mysql');

const db = mysql.createPool({
    host : "fin.cba5gmvkz0xz.ap-northeast-2.rds.amazonaws.com",//endpoint
    port : "3306",//portnum
    user : "hwi",
    password :"1q2w3e4r",
    database : "ticket"
})



module.exports = db;