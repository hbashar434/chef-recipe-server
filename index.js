const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

const chef = require("./data/chef.json");

app.get("/", (req, res) => {
  res.send("chef-recipe is Running!");
});

app.get("/chef", (req, res) => {
  res.send(chef);
});

app.listen(port, () => {
  console.log(`chef-recipe is Running on port ${port}`);
});
