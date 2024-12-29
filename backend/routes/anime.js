const express = require("express");
const router = express.Router();
const Anime = require("../models/Anime");
const FeaturedAnime = require("../models/FeaturedAnime");

// Pobierz anime dla danego nastroju
router.get("/moods/:mood", async (req, res) => {
  try {
    const mood = req.params.mood.toLowerCase();
    const animeList = await Anime.find({ moods: mood });
    res.json(animeList);
  } catch (err) {
    res.status(500).json({ error: "Błąd podczas pobierania anime" });
  }
});

// Pobierz wszystkie plakaty anime
router.get("/posters", async (req, res) => {
  try {
    const posters = await Anime.find({}, "_id title imageUrl"); // Pobieramy tylko potrzebne pola
    res.json(posters);
  } catch (err) {
    res.status(500).json({ error: "Błąd podczas pobierania plakatów" });
  }
});

// Pobierz szczegóły anime na podstawie ID
router.get("/:id", async (req, res) => {
  try {
    const anime = await Anime.findById(req.params.id); // Znajdź anime po ID
    if (!anime) {
      return res.status(404).json({ error: "Anime not found" });
    }
    res.json(anime);
  } catch (err) {
    res.status(500).json({ error: "Błąd podczas pobierania szczegółów anime" });
  }
});

// Pobierz "anime dnia"
router.get("/featured", async (req, res) => {
  try {
    const featured = await FeaturedAnime.findOne({}).populate("anime"); // Pobierz szczegóły anime
    if (!featured) {
      return res.status(404).json({ error: "No featured anime found" });
    }
    res.json(featured.anime);
  } catch (err) {
    res.status(500).json({ error: "Error fetching featured anime" });
  }
});

module.exports = router;
