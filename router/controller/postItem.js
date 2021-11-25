const arrayItem = [];
const postItem = (req, res) => {
  arrayItem.length = 0;
  const { item } = req.body;
  arrayItem.push(item);
  res.status(200).json(item);
};
const getItem = (req, res) => {
  try {
    res.status(200).json(arrayItem);
  } catch {
    res.status(404);
  }
};
module.exports = {
  postItem,
  getItem,
};
