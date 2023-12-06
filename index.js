const express = require("express") ;
const json = require("./csvjson.json");

const dotenv= require("dotenv")
dotenv.config();

const app = express() ;
app.get("/" , (req, res )=> {
    res.send(json);
    
})

app.listen(process.env.PORT, ()=> {
    console.log("Server is Listening ");

})