const mongo = require("mongoose");

const registerSchema = new mongo.Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  bDate: { type: Date, min: "2006-09-28" },
  mealsList: [{ type: mongo.Schema.Types.ObjectId, ref: "Meals" }],
});

module.exports = mongo.model("Users", registerSchema);
// userName: "kkj",
//   email: "k@k.com",
//   password: "ppp",
//   phoneNumber:000},
//   bDate: { type: Date, min: "2006-09-28" },