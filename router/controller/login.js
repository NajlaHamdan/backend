const { response } = require("express");
const registerModel = require("./../../db/models/register");

const logIn = (req, res) => {
  const { password, email } = req.body;
  registerModel
    .find({
      $and: [{ password: password }, { email: email }],
    })
    .then((result) => {
    //   response = { id: result._id };
     // console.log(result[0]["_id"]);
      res.json(result[0]["_id"]);
    })
    .catch((err) => res.send(err));
};
module.exports = {
  logIn,
};
// { _id: id },
