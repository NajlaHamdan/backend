const arrayItem = [];
const postItem = (req, res) => {
  arrayItem.length = 0;
  const { item } = req.body;
  arrayItem.push(item);
  res.status(200).json(item);
};
const getItem = (req, res) => {
  res.status(200).json(arrayItem);
};
module.exports = {
  postItem,
  getItem,
};
