const express = require("express");
const dotenv=require("dotenv");
const db=require("./db/db");
const app=express();
dotenv.config();
const port=process.env.PORT;


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})