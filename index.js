const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;

const chef = require("./data/chef.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("chef-recipe is Running!");
});

app.get("/chef", (req, res) => {
  res.send(chef);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const itemRecipe = chef.find((recipe) => recipe._id === id);
  res.send(itemRecipe);
});

app.listen(port, () => {
  console.log(`chef-recipe is Running on port ${port}`);
});
