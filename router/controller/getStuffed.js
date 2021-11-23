const mealsModel = require("../../db/models/meals");

const getStuffed = (req, res) => {
  mealsModel
    .find({typeOfMeal:"stuffed"})
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

module.exports = { getStuffed };