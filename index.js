const express = require("express")
const app = new express

app.get("/port",(req,res)=>{
    res.send("<div>responses</div>")
})

app.listen(7000,()=>{
    console.log("server is listening on port 7000")
})