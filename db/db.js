const mongo = require("mongoose");
const dotenv = require("dotenv");

const db = process.env.DB;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const url = `mongodb://localhost:27017/${db}`;
mongo
  .connect(url, options)
  .then(console.log("db connected"))
  .catch((err) => console.log(err));
