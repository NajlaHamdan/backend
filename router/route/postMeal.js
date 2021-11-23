const express = require("express");
const { postMeal } = require("./../controller/postMeal");

const postMealRouter = express.Router();
postMealRouter.post("/postMeal", postMeal);

module.exports = postMealRouter;
