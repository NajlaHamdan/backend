const {getComment}=require("./../controller/getComment");

const express=require("express");
const getCommentRouter=express.Router();
getCommentRouter.post("/getComment",getComment);

module.exports=getCommentRouter;