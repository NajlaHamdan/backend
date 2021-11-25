const mealsModel = require("../../db/models/meals");

const getSweet = (req, res) => {
  mealsModel
    .find({ typeOfMeal: "sweet" })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
};

module.exports = { getSweet };
