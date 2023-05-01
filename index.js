const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const slider = require("./data/slider.json");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Indian Recipes server is running!");
});
app.get("/slider", (req, res) => {
  res.send(slider);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
