const {getMeals}=require("./../controller/getMeals");

const express=require("express");
const getMealsRouter=express.Router();
getMealsRouter.get("/getMeals",getMeals);

module.exports=getMealsRouter;