const mealsModel = require("../../db/models/meals");

const getDrink = (req, res) => {
  mealsModel
    .find({ typeOfMeal: "drink" })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
};

module.exports = { getDrink };
