// it is used to compare the client side server with server side token

let obj=require("./token");

let auth = (req,res,next)=>{
    let allHeaders=req.headers;
    let c_token=allHeaders.token;

    if(allHeaders.token!= null){

        if(c_token === obj.token)
        {
            next();
        }
        else{
            return res.send({msg:"unauthorized user"});
        }
    }else{
        return res.send({msg:"user not logged in"});
    }
};

module.exports=auth;