let conn = require("../config/db_connection");

let connection = conn.getconnection();

let obj=require("../config/token");

let generatetoken = require("../config/generate_token");

let login = require("express").Router().post("/",(req,res)=>{

    connection.query(`select * from login_details where uname='${req.body.uname}' and upwd='${req.body.upwd}';`,
                        (err,records,fields)=>{
                            if(err) throw err;
                            else{
                                if(records.length>0){
                                    let token = generatetoken({"uname":req.body.uname,
                                                   "upwd":req.body.upwd},"hr@nareshit.in")
                                    obj.token=token;
                                    res.send({login:"success",token:token});
                                    }
                                else{
                                    res.send({login:"failed"})
                                }
                            }
    })

})

module.exports=login;