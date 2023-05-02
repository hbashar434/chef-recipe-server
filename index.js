const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("chef-recipe is Running!");
});

app.listen(port, () => {
  console.log(`chef-recipe is Running on port ${port}`);
});
