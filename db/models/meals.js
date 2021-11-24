const mongo = require("mongoose");

const mealSchema = new mongo.Schema({
  title: { type: String, required: true },
  typeOfMeal: { type: String, required: true },
  src: { type: String, required: true },
  cookingTime: { type: String },
  Nopeople: { type: String },
  HowToPrepare: { type: String, required: true },
  Ingredients: { type: String, required: true },
  userComments: [
    {
      value: { type: String },
      userId: { type: mongo.Schema.Types.ObjectId, ref: "Register" },
    },
  ],
});

module.exports = mongo.model("Meals", mealSchema);
