const {getDrink}=require("./../controller/getDrink");

const express=require("express");
const getDrinkRouter=express.Router();
getDrinkRouter.get("/getDrink",getDrink);

module.exports=getDrinkRouter;