const mealsModel = require("../../db/models/meals");

const getDrink = (req, res) => {
  mealsModel
    .find({typeOfMeal:"drink"})
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

module.exports = { getDrink };