const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  mood: { type: [String], required: true }, // Lista nastrojów
  genres: { type: [String], required: true }, // Lista gatunków
  rating: { type: Number, default: 0 },
  imageUrl: { type: String },
});

module.exports = mongoose.model("Anime", animeSchema);
