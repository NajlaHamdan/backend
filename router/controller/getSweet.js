const mealsModel = require("../../db/models/meals");

const getSweet = (req, res) => {
  mealsModel
    .find({typeOfMeal:"sweet"})
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

module.exports = { getSweet };