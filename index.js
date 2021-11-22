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

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
