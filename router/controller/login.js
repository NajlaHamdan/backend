const registerModel = require("./../../db/models/register");

const logIn = (req, res) => {
  const { password, email } = req.body;
  registerModel
    .find({
      $and: [{ password: password }, { email: email }],
    })
    .then((result) => {
      // response = { id: result._id };
      // console.log(result[0]["_id"]);
      res.status(200).json(result[0]["_id"]);
    })
    .catch((err) => res.status(404).send(err));
};
module.exports = {
  logIn,
};
// many to many relation schema mongo
