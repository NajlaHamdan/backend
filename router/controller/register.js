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
       res.json(result["_id"]);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

module.exports = {
  register,
};
