let conn=require("../config/db_connection");
let connection=conn.getconnection();

let contact=require("express").Router().get("/",[require("../config/auth")],(req,res)=>{

    connection.query(`select * from contact`,(err,records,fields)=>{
        if(err) throw err;
        else{
            res.send(records)
        }
    });
});
module.exports=contact;