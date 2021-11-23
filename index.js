const express = require("express");
const dotenv = require("dotenv");
const db = require("./db/db");
const cors=require("cors");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

const registerRouter = require("./router/route/register");
app.use("/", registerRouter);

const logInRouter = require("./router/route/login");
app.use("/", logInRouter);

const profileRouter = require("./router/route/profile");
app.use("/", profileRouter);

const postMealRouter = require("./router/route/postMeal");
app.use("/", postMealRouter);

const getMealsRouter = require("./router/route/getMeals");
app.use("/", getMealsRouter);

const getSweetRouter = require("./router/route/getSweet");
app.use("/", getSweetRouter);

const getStuffedRouter = require("./router/route/getStuffed");
app.use("/", getStuffedRouter);

const getDrinkRouter = require("./router/route/getDrink");
app.use("/", getDrinkRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
