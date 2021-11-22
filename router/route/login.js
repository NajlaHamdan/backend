const express=require("express");
const {logIn}=require("./../controller/login");
const logInRouter=express.Router();

logInRouter.post("/login",logIn);

module.exports=logInRouter;