const mealsModel = require("./../../db/models/meals");

const postMeal = (req, res) => {
  const {
    title,
    typeOfMeal,
    src,
    cookingTime,
    Nopeople,
    HowToPrepare,
    Ingredients,
  } = req.body;
  const newMeal = new mealsModel({
    title,
    typeOfMeal,
    src,
    cookingTime,
    Nopeople,
    HowToPrepare,
    Ingredients,
  });
  // console.log(newMeal)
  newMeal
    .save()
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err);
      res.status(404).json(err);
    });
};

module.exports = {
  postMeal,
};
// title: "stuffed vegetables",
//     type: "stuffed",
//     src: "D:\tuwaiqprojectscap2-W07D01\backenddbstuffed",
//     cookingTime: "40 minutes",
//     Nopeople: "for 7 peoples ",
//     HowToPrepare:
//       "Heat the oven to 160°C. : To prepare the filling: cut the tops of the peppers and tomatoes into bowls and set aside, cored out and set aside.Slice the zucchini and eggplant lengthwise, and then extract the inside until it becomes a boat shape, ready for fillingMix the pepper pulp and the heart of the zucchini, eggplant and tomatoes well.In a large skillet over medium heat, heat 3 tablespoons of olive oil, saute onions and garlic for 3-5 minutes until softened, add the chopped vegetable heart and tomato puree, and cook for 10 minutes until softened.:In a large skillet over medium heat, heat 3 tablespoons of olive oil, saute onions and garlic for 3-5 minutes until softened, add the chopped vegetable heart and tomato puree, and cook for 10 minutes until softened.:Add rice and vegetable stock, bring to a simmer and cook for 10 minutes, stirring occasionally, season with salt and pepper and toss with herbs and chili flakes.:Arrange the vegetable boats on a roasting tray or oven dish and pour the rice mixture with a spoon, place the lids on the peppers and tomatoes and drizzle with the remaining olive oil.:Pour the remaining broth into the tray, cover with tin foil and bake for an hour.:Remove the aluminum foil and return the tray for another 15-30 minutes, until the rice and vegetables are done.",
//     Ingredients:
//       "Green pepper: 1 piece Red pepper: 1 piece Yellow pepper: 1 piece Tomato: 2 pieces (large size) Eggplant: 2 pieces (small size) Zucchini: 1 piece (green) Zucchini: 1 piece (yellow) Olive oil: 6 tablespoons Onion: 1 piece (large size / finely chopped) Garlic: clove (finely chopped) Tomatoes: 3 tablespoons (tomato puree) Long grain rice: 400 grams (washed) Vegetable broth: a cup",
