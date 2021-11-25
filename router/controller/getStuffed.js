const mealsModel = require("../../db/models/meals");

const getStuffed = (req, res) => {
  mealsModel
    .find({ typeOfMeal: "stuffed" })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
};

module.exports = { getStuffed };
