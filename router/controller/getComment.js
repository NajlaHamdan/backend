const mealsModel = require("./../../db/models/meals");

const getComment = (req, res) => {
  const { id } = req.body;
  console.log("hi");
  mealsModel
    .find({ _id: id })
    .then((result) => res.status(200).json(result[0]["userComments"]))
    .catch((err) => {
      console.log(err);
      res.status(404).json(err);
    });
};

module.exports = {
  getComment,
};
