const {getComment}=require("./../controller/getComment");

const express=require("express");
const getCommentRouter=express.Router();
getCommentRouter.get("/getComment/:id",getComment);

module.exports=getCommentRouter;