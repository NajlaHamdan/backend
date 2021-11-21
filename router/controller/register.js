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
  newUser
    .save()
    .then((result) => res.json(result))
    .catch((err) => res.send(err));
};

module.exports = {
  register,
};
