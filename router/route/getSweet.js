const {getSweet}=require("./../controller/getSweet");

const express=require("express");
const getSweetRouter=express.Router();
getSweetRouter.get("/getSweet",getSweet);

module.exports=getSweetRouter;