const express = require("express")
const cors =require("cors")
const app = express()
app.use(cors())
app.use(express.json())

var username = "saravana"
var password = "123"

app.post("/login",function(req,res){
    console.log(req.body)
    if(username===req.body.username && password===req.body.password){
        res.send(true)
    }
    else{
        res.send(false)
    }

})

app.listen(5000,function(){
    console.log("sever started")
})