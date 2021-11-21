const express = require("express");
const dotenv = require("dotenv");
const db = require("./db/db");

const app = express();
dotenv.config();

app.use(express.json());
const registerRouter = require("./router/route/register");
app.use("/users", registerRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
