const mealsModel = require("./../../db/models/meals");

const postComment = (req, res) => {
  const { value, userId, _id } = req.body;
  const newComment = {
    value,
    userId,
  };
  mealsModel
    .findByIdAndUpdate(_id, { $push: { userComments: newComment } })
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err);
      res.status(404).json(err);
    });
};

module.exports = {
  postComment,
};
