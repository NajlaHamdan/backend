const registerModel = require("./../../db/models/register");

const profile = (req, res) => {
  const { id } = req.body;
  registerModel
    .find({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

module.exports = { profile };
