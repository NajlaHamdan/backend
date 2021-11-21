const mongo = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const db = process.env.DB;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const url = `mongodb+srv://najla:najla@cluster0.wzqpi.mongodb.net/${db}?retryWrites=true&w=majority`;
mongo
  .connect(url, options)
  .then(console.log("db connected"))
  .catch((err) => console.log(err));
