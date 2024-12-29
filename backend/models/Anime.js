const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  moods: { type: [String], default: [] }, // Lista nastrojów
  genres: { type: [String], required: true }, // Lista gatunków
  rating: { type: Number, default: 0 },
  imageUrl: { type: String },
});

module.exports = mongoose.model("Anime", animeSchema);
