const mongo = require("mongoose");

const mealSchema = new mongo.Schema({
  title: { type: String, required: true },
  typeOfMeal: { type: String, required: true },
  src: { type: String, required: true },
  cookingTime: { type: String },
  Nopeople: { type: String },
  HowToPrepare: { type: String, required: true },
  Ingredients: { type: String, required: true },
});

module.exports = mongo.model("Meals", mealSchema);
