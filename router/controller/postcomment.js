const mealsModel = require("./../../db/models/meals");

const postComment = (req, res) => {
  const { value,userId,_id } =req.body;
  const newComment = {
    value,userId
  };
  mealsModel.findByIdAndUpdate(_id,
  { $push: { userComments: newComment } })
    .then((result) => res.json(result))
    .catch((err) => {
      console.log(err)
      res.json(err)});
};

module.exports = {
    postComment,
};
