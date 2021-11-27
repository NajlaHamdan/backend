const registerModel = require("./../../db/models/register");

const profile = (req, res) => {
  const { id } = req.params;
  registerModel
    .find({ _id: id })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
};

module.exports = { profile };
