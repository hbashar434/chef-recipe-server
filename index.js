const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;

const chefs = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("chef-recipe is Running!");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const itemRecipe = chefs.find((recipe) => recipe._id === id);
  res.send(itemRecipe);
});

app.listen(port, () => {
  console.log(`chef-recipe is Running on port ${port}`);
});
