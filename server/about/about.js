let conn=require("../config/db_connection");

let connection = conn.getconnection();

let about = require("express").Router().get("/",[require("../config/auth")],(req,res)=>{
    connection.query(`select * from about`,(err,records,fields)=>{
        if(err) throw err;
        else{
            res.send(records)
        }
    })
});

module.exports=about;