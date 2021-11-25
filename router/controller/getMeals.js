const mealsModel = require("./../../db/models/meals");

const getMeals = (req, res) => {
  mealsModel
    .find({})
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
};

module.exports = { getMeals };
