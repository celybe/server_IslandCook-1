const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Recipe = new Schema({
  id: String,
  name: String,
  ingredients: [{ name: String, amount: String }],
  steps: [String],
  picture_url: String,
  difficulty: String,
  author: String,
  tags: [String],
});

module.exports = mongoose.model("Recipe", Recipe);
