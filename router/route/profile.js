const express=require("express");
const {profile}=require("./../controller/profile");
const profileRouter=express.Router();

profileRouter.get("/profile",profile);

module.exports=profileRouter;