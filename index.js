
const express = require('express')  // require import krna express
const app = express();  // server ko instance kr diya

//load config from env file
require("dotenv").config();    // load .env file to process.env file
const PORT = process.env.PORT || 4000;  // port ko .env file se fetch kr liya 

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");
// mount the todo api routes
app.use("./api/v1" ,todoRoutes);  // ye jo path hai wo simply url me ja kr append ho gyega uske baad ye todoroutes ko call gayega...


//start server
app.listen(PORT ,() =>{
    console.log(`server started at successfully at ${PORT}`);

})



//connnect to data base
const dbconnect = require("./config/database");  // import the data base...
dbconnect();



// default route
app.get("/" ,(req,res)=>{
    res.send("this is home page");
})




