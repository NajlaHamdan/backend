const {postComment}=require("./../controller/postcomment");

const express=require("express");
const postCommentRouter=express.Router();
postCommentRouter.post("/postComment",postComment);

module.exports=postCommentRouter;