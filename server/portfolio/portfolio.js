let conn = require("../config/db_connection");

let connection= conn.getconnection();

let portfolio=require("express").Router().get("/",[require("../config/auth")],(req,res)=>{
    connection.query(`select * from portfolio`,(err,records,fields)=>{
        if(err) throw err;
        else{
            res.send(records);
        }
    })
});

module.exports=portfolio;