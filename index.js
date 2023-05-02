const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const slider = require("./data/slider.json");
const chef = require("./data/chef.json");
const recipesDetails = require("./data/recipesdetails.json");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Indian Recipes server is running!");
});
app.get("/slider", (req, res) => {
  res.send(slider);
});

app.get("/chef", (req, res) => {
  res.send(chef);
});
app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const singleChef = chef.find((chef) => chef.id == id);
  if (singleChef) {
    res.send(singleChef);
  }
});
app.get("/recipes/details/:id", (req, res) => {
  const id = req.params.id;
  const recipesFilter = recipesDetails.filter((recipe) => recipe.chefId == id);
  if (recipesDetails) {
    res.send(recipesFilter);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
