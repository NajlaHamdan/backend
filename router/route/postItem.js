const express = require("express");
const { postItem,getItem } = require("./../controller/postItem");

const postItemRouter = express.Router();
postItemRouter.post("/postItem", postItem);
postItemRouter.get("/getItem", getItem);
module.exports = postItemRouter;