let express = require("express");

let app= express();

let cors=require("cors");
let bodyparser=require("body-parser");

app.use(cors())

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use("/login",require("./login/login"));
app.use("/about",require("./about/about"));
app.use("/contact",require("./contact/contact"));
app.use("/portfolio",require("./portfolio/portfolio"));
app.use("/logout",require("./logout/logout"));

app.listen(8080);
console.log("app is listining to port no 8080");
