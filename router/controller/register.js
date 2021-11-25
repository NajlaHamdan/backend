const registerModel = require("./../../db/models/register");

const register = (req, res) => {
  const { userName, email, password, phoneNumber, bDate } = req.body;
  const newUser = new registerModel({
    userName,
    email,
    password,
    phoneNumber,
    bDate,
  });
  // console.log(newUser)
  newUser
    .save()
    .then((result) => {
      // res.json(result)
       res.status(200).json(result["_id"]);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send(err);
    });
};

module.exports = {
  register,
};
