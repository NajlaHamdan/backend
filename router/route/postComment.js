const {postComment}=require("./../controller/postcomment");

const express=require("express");
const postCommentRouter=express.Router();
postCommentRouter.post("/postcomment",postComment);

module.exports=postCommentRouter;