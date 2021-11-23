const {getStuffed}=require("./../controller/getStuffed");

const express=require("express");
const getStuffedRouter=express.Router();
getStuffedRouter.get("/getStuffed",getStuffed);

module.exports=getStuffedRouter;