const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  url: { type: String, required: true },
  save_date: { type: String, default: Date.now },
  note: { type: String }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
