const mealsModel = require("./../../db/models/meals");

const getMeals = (req, res) => {
  mealsModel
    .find({})
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

module.exports = { getMeals };
